import { mean } from "../src/mean";
import { median } from "../src/median";
import { mode } from "../src/mode";
import { wordfreq } from "../src/wordfreq";
import { lineareg } from "../src/lineareg";
import { movingavg } from "../src/movingavg";

var numbers: Array<number> = [100,200,300,400,150];
var yNumbers: Array<number> = [150,200,250,120,170];
var chars: Array<string> = ["Hello", "Welcome", "Hello", "Hi", "hello"]

console.log(mean(numbers));
console.log(median(numbers))
console.log(mode(numbers))
console.log(wordfreq(chars))
console.log(lineareg(numbers, yNumbers, 80))
console.log(movingavg(numbers, 3))