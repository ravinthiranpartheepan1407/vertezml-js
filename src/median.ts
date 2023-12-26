export function median(x: Array<number>): number {
    var res: Array<number> = [];
    var out: number;
    var elements: number;
    var min: number = x[0];

    for (elements = 0; elements < x.length; elements++) {
        if (min < x[elements]) {
            res.push(x[elements]);
        } else {
            res.push(min);
            min = x[elements];
        }
    }

    if (res.length % 2 !== 0) {
        var index: number = Math.floor(res.length / 2);
        out = res[index];
    } else {
        var index: number = res.length / 2;
        var firstIndex: number = res[index - 1];
        var secondIndex: number = res[index];
        out = (firstIndex + secondIndex) / 2;
    }
    return out;
}
