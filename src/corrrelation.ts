export function correlation(x: Array<number>, y: Array<number>): number{
    var elements: number;
    var xSum: number = 0;
    var ySum: number = 0
    var sqrTX: number = 0;
    var sqrTY: number = 0;
    var powAddX: number = 0;
    var powAddY: number = 0;
    var meanX: number;
    var meanY: number;
    var covVal: number = 0;

    for(elements = 0; elements < x.length; elements++){
        xSum += x[elements]
        ySum += y[elements]
    }
    meanX = xSum / x.length
    meanY = ySum / y.length
    
    for(elements = 0; elements < x.length; elements++){
        // Calculate Standard Deviation X
        const diff: number = x[elements] - meanX
        const powDiff: number = Math.pow(diff, 2)
        powAddX += powDiff;
        sqrTX = Math.sqrt(powAddX)
    }

    for(elements = 0; elements < y.length; elements++){
        // Calculate Standard Deviation Y
        const diff: number = y[elements] - meanY
        const powDiff: number = Math.pow(diff, 2)
        powAddY += powDiff;
        sqrTY = Math.sqrt(powAddY)
    }

    // Calculate Covariance of Features X and Y
    for(elements = 0; elements < x.length; elements++){
        var covX: number = x[elements] - meanX
        var covY: number = y[elements] - meanY
        var mulXT: number = covX * covY
        covVal += mulXT
    }
    var covar: number = covVal / x.length
    var res: number = covar / (sqrTX * sqrTY)
    return res
}