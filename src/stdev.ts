export function stdev(x: Array<number>){
    var mean: number;
    var sqrdSum: number = 0;
    var elements: number;
    var meanCalc: number = 0;
    for(elements = 0; elements < x.length; elements++){
        meanCalc += x[elements];
    }
    mean = meanCalc / x.length;
    // Squared difference between elements and mean
    for(elements = 0; elements < x.length; elements++){
        var diff: number = x[elements] - mean;
        var powDiff: number = Math.pow(diff, 2);
        sqrdSum += powDiff;
    }
    var calc: number = sqrdSum / x.length;
    var stdOut: number = Math.sqrt(calc);
    // console.log(stdOut);
    return stdOut;
}