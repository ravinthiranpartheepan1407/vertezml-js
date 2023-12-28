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

var numbers: Array<number> = [13,27,64,41,50];
var yNumbers: Array<number> = [51,25,78,45,35];
var chars: Array<string> = ["Hello", "Welcome", "Hello", "Hi", "hello"]

console.log(mean(numbers));
console.log(median(numbers))
console.log(mode(numbers))
console.log(wordfreq(chars))
console.log(lineareg(numbers, yNumbers, 80))
console.log(movingavg(numbers, 3))
console.log(autoregressive(numbers,2,10))
console.log(cov(numbers, yNumbers))
console.log(stdev(numbers));
console.log(cosimilarity(numbers,yNumbers))
console.log(anova(numbers,yNumbers))