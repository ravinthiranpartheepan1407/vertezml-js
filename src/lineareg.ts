export function lineareg(x: Array<number>, y: Array<number>, z: number){
    var xMean: number;
    var xSum: number = 0;
    var ySum: number = 0;
    var yMean: number;
    var elements: number;
    var xSlope: Array<number> = [];
    var ySlope: Array<number> = [];
    var xSqr: number = 0;
    var xyProd: number = 0;
    if(x.length == y.length){
        // Sum up all values in X
        for(elements = 0; elements < x.length; elements++){
            xSum += x[elements];
        }
        xMean = xSum / x.length;
        // console.log(xMean)

        // Sum up all values in Y
        for(elements = 0; elements < y.length; elements++){
            ySum += y[elements];
        }
        yMean = ySum / y.length;
        // console.log(yMean)
        
        // Calculate Slope (m: x and y)
        for(elements = 0; elements < x.length; elements++){
            var xSlopeCalc = x[elements] - xMean;
            xSlope.push(xSlopeCalc);
        }
        for(elements = 0; elements < y.length; elements++){
            var xSlopeCalc = y[elements] - yMean;
            ySlope.push(xSlopeCalc);
        }

        // Take squares on xSlope and ySlope
        for(elements = 0; elements < x.length; elements++){
            var xSlopeSqr = x[elements] - xMean;
            var powX = Math.pow(xSlopeSqr, 2);
            xSqr += powX;
        }
        // console.log(xSqr)
        for(elements = 0; elements < xSlope.length; elements++){
            var slopeProd = xSlope[elements] * ySlope[elements]
            xyProd += slopeProd;
        }
        // console.log(xyProd)
        var slope: number = xyProd / xSqr;

        // Calculate Intercept
        var intercept: number = yMean - (slope * xMean);

        // Regression Analysis
        var regression: number = (slope * z) + intercept;
        // console.log(regression)
        return regression;
    } else{
        throw new Error("X and Y Dimensions does not match");        
    }
}