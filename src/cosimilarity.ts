export function cosimilarity(x:Array<number>, y:Array<number>):number{
    var prodSum: number = 0;
    var xProdSum: number = 0;
    var yProdSum:  number = 0;
    var elements: number;
    var res: number;
    for(elements = 0; elements < x.length; elements++){
        var calc:number = x[elements] * y[elements];
        prodSum += calc;
        // Squares on each features
        var xSqr: number = Math.pow(x[elements], 2);
        var ySqr: number = Math.pow(y[elements], 2);
        // Sum up squares
        xProdSum += xSqr;
        yProdSum += ySqr;
    }
    var calcDenom: number = Math.sqrt(xProdSum) * Math.sqrt(yProdSum);
    // if((prodSum / calcDenom) == 1){
    //     console.log("Two vectors are identical and points in the same direction");
    // } else if((prodSum / calcDenom) < 1 && (prodSum / calcDenom) > 0){
    //     console.log("Two vectors are somewhat similar but not identical");
    // } else{
    //     console.log("Two Vectors are not similar");
    // }
    // console.log(prodSum/calcDenom);
    res = prodSum / calcDenom;
    return res;
}