export function wordfreq(chars: Array<string>){
    const count: {[key: string]: number} = {}

    for(const num of chars){
        count[num] = count[num] ? count[num] + 1 : 1
    }
    return count
}