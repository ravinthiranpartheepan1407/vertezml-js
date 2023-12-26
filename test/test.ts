import { mean } from "../src/mean";
import { median } from "../src/median";
import { mode } from "../src/mode";
import { wordfreq } from "../src/wordfreq";

const numbers: Array<number> = [10,20,30,40,60,50];
var chars: Array<string> = ["Hello", "Welcome", "Hello", "Hi", "hello"]

console.log(mean(numbers));
console.log(median(numbers))
console.log(mode(numbers))
console.log(wordfreq(chars))