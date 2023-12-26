export function mode(x: Array<number>) {
    // Key-value Pair
    const counts: { [key: number]: number} = {}

    // Count occurences of each key -> 10: 1,2,...
    for (const num of x) {
        // Ternary Operator
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts
}
