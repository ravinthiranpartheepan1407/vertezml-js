export function anova(x: Array<number>, y: Array<number>):number{
    var sumX: number = 0;
    var sumY: number = 0;
    var meanX: number;
    var meanY: number;
    var xSSWG: number = 0;
    var ySSWG: number = 0;  
    var xMeanTot: number = 0;
    var yMeanTot: number = 0;
    var xObs: number = 0;
    var yObs: number = 0;  
    var elements: number;
    if(x.length === y.length){
        for(elements = 0; elements < x.length; elements++){
            sumX += x[elements];
            sumY += y[elements];
        }
        meanX = sumX / x.length;
        meanY = sumY / y.length;
        // SSW (Sum of Squares within groups) = Sum(Square(Sample - Mean))
        for(elements = 0; elements < x.length; elements++){
            var diff: number = x[elements] - meanX;
            var sqr: number = Math.pow(diff,2)
            xSSWG += sqr;
        }
        for(elements = 0; elements < y.length; elements++){
            var diff: number = y[elements] - meanY;
            var sqr: number = Math.pow(diff,2);
            ySSWG += sqr;
        }
        var sswg: number = xSSWG + ySSWG;
        // Each Groups: TSS (Total Sum of Squares):
        // Mean of all observations
        for(elements = 0; elements < x.length; elements++){
            xMeanTot += x[elements];
            yMeanTot += y[elements]; 
        }
        var lenXY: number = x.length + y.length;
        var meanTot: number = (xMeanTot + yMeanTot) / lenXY;
        // observation[index] - mean, Square (observation[index] - mean), and Sum(Square(Observation[index] - mean
        for(elements = 0; elements < x.length; elements++){
            var xoVal: number = x[elements] - meanTot;
            var sqr: number = Math.pow(xoVal,2)
            xObs += sqr;
        }
        for(elements = 0; elements < y.length; elements++){
            var yoVal:number = y[elements] - meanTot;
            var sqr: number = Math.pow(yoVal, 2)
            yObs += sqr;
        }

        var tss: number = xObs + yObs;

         // Calculate Sum of Squares between groups
        // Sum of Squares between groups = Total sum of squares - Sum of squares within groups
        var xMeanSSBG: number = meanX - meanTot;
        var yMeanSSBG: number = meanY - meanTot;
        var ssBG: number = (Math.pow(xMeanSSBG,2) + Math.pow(yMeanSSBG,2)) * x.length;

        // Final Calculations
        // degress of freedom - 1 which is (total no.of groups) - 1
        // a = Sum of Squares between group / degrees of freedom 
        var finalSSBG: number = ssBG / 1;

        // degrees of freedom = total observations - total no.of groups
        // b = Sum of squares within groups / degrees of freedom
        var finalSSWG: number = sswg / ((x.length + y.length)-3);
        var res: number = finalSSBG / finalSSWG;
        // Refer F-Statistics
        // Consider degrees of freedom from numerator from Horizontal perspective which is SSBG
        // Consider degrees of freedom from numerator from Vertical perspective which is SSWG
        // In this case the degrees of freedom in horizontal perspective is 1 (Groups - 1)
        // In this case the degrees of freedom in horizontal perspective is 7 (Total observations - 3)
        // console.log(res)
        return res;
    } else{
        throw new Error("Inputs are not in same dimension"); 
    }
}