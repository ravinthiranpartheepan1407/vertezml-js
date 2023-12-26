export function mean(x: Array<number>){
    var x:Array<number>;
    var elements: number;
    var sum: number = 0;
    for(elements = 0; elements < x.length; elements++ ){
        sum += x[elements];
    }
    var out: number = sum / x.length;
    console.log(out);
}