export function movingavg(x: Array<number>, criteria: number){
    var result: Array<number> = [];
    var elements: number;
    var xElements: number;
    var yElements: number;

    for(xElements = criteria - 1; xElements < x.length; xElements++){
        var mvCompute = 0;
        for(yElements = 0; yElements < criteria; yElements++){
            mvCompute += x[xElements - yElements]
        }
        var out: number = mvCompute / criteria;
        result.push(out)
    }
    return result
}