// T -> Time Step
// stopT - Predict till this time

export function autoregressive(x: Array<number>, t: number, stopT: number){
    var xMeanYT: number;
    var xMeanYT1: number;
    var xSum: number = 0;
    var elements: number;
    var sumXTY1: number = 0;
    var dyt: Array<number> = [];
    var dyt1: Array<number> = [];
    var sumProd: number = 0;
    var sumDyt1: number = 0;
    var predicted: Array<number> = [];
    var residuals: number = 0;
    for(elements = 0; elements < stopT; elements++){
        for(elements = 1; elements < x.length; elements++){
            xSum += x[elements]
        }
        xMeanYT = xSum / x.length
        for(elements = 0; elements < (x.length - 1); elements++){
            sumXTY1 += x[elements]
        }
        xMeanYT1 = sumXTY1 / x.length
        
        // Calculate deviations from xMean and xMeanTY1
        for(elements = 1; elements < x.length; elements++){
            var dytVal: number = x[elements] - xMeanYT;
            dyt.push(dytVal);
        }
        for(elements = 0; elements < (x.length - 1); elements++){
            var dyt1Val: number = x[elements] - xMeanYT1;
            dyt1.push(dyt1Val)
        }

        // Summing up the product between deviations of xMeanYT and xMeanYT1
        for(elements = 0; elements < dyt.length; elements++){
            var prod: number = dyt[elements] * dyt1[elements]
            sumProd += prod;
        }

        // Calculate sum of square of deviation for YT1
        for(elements = 0; elements < dyt1.length; elements++){
            var sqrDyt1 = Math.pow(dyt1[elements], 2)
            sumDyt1 += sqrDyt1;
        }

        // Calculate beta coefficient
        var beta = sumProd / sumDyt1

        // Calculate predicted values
        for(elements = 0; elements < x.length; elements++){
            var predict: number = beta * x[elements]
            predicted.push(predict)
        }
        // Calculate residuals or error term (ET)
        for(elements = 0; elements < x.length; elements++){
            var residualsCalc = x[elements] - predicted[elements]
            residuals += residualsCalc;
        }
        var errorTerm: number = residuals / x.length
        
        // Deriving autogressive model
        if(t >= x.length && t < stopT){
            var out: number = beta * x[t-1];
            var regAuto: number = out + errorTerm;
            x.push(regAuto)
        }
        t = t+1;
    }
    return x;
}