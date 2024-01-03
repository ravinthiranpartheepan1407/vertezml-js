import { mean } from "../src/mean";
import { median } from "../src/median";
import { mode } from "../src/mode";
import { wordfreq } from "../src/wordfreq";
import { lineareg } from "../src/lineareg";
import { movingavg } from "../src/movingavg";
import { autoregressive } from "../src/autoregressive";
import { cov } from "../src/cov";
import { stdev } from "../src/stdev";
import { cosimilarity } from "../src/cosimilarity";
import { anova } from "../src/anova";
import { seasondecomp } from "../src/seasondecomp";
import { chisqr } from "../src/chisqr";

var numbers: Array<number> = [10,20,30,40];
var yNumbers: Array<number> = [15,25,35,45];

type data = {
    groups: string;
    metrics: Array<string>;
    values: Array<number>;
}

var a: data = {
    groups: "Provider A",
    metrics: ["Good", "Average", "Poor"],
    values: [45, 30, 25],
};

var b: data = {
    groups: "Provider B",
    metrics: ["Good", "Average", "Poor"],
    values: [40, 35, 25],
};

var c: data = {
    groups: "Provider C",
    metrics: ["Good", "Average", "Poor"],
    values: [55, 25, 20],
};

var chars: Array<string> = ["Hello", "Welcome", "Hello", "Hi", "hello"]

console.log(numbers.length)
console.log(yNumbers.length)
console.log("-----------")

console.log(mean(numbers));
console.log(median(numbers))
console.log(mode(numbers))
console.log(wordfreq(chars))
console.log(lineareg(numbers, yNumbers, 80))
console.log(movingavg(numbers, 3))
console.log(autoregressive(numbers,2,10))
console.log(cov(numbers, yNumbers))
console.log(stdev(numbers));
console.log(cosimilarity(numbers, yNumbers))
console.log(anova(numbers, yNumbers))
console.log(seasondecomp(numbers))
console.log(chisqr(a,b,c))