export function cov(x: Array<number>, y: Array<number>):number{
    var xMean: number;
    var yMean: number;
    var xSum: number = 0;
    var ySum: number = 0;
    var elements: number;
    var covXY: number = 0;
    var covOut: number;

    for(elements = 0; elements < x.length; elements++){
        xSum += x[elements];
    }
    xMean = xSum / x.length
    for(elements = 0; elements < y.length; elements++){
        ySum += y[elements]
    }
    yMean = ySum / y.length
    for(elements = 0; elements < x.length; elements++){
        var xyDiff: number = (x[elements] - xMean) * (y[elements] - yMean)
        covXY += xyDiff;
    }
    covOut = covXY / x.length;
    return covOut;
}