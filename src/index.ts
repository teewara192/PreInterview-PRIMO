export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    const result: number[] = [];

    let i=0; //a pointer for collection_1
    let j=0; //a pointer for collection_2
    let k=collection_3.length - 1; //pointer for collection_3

    while (i<collection_1.length || j<collection_2.length || k>=0) {
        const num1 = i < collection_1.length ? collection_1[i] : Infinity;
        const num2 = j < collection_2.length ? collection_2[j] : Infinity;
        const num3 = k >= 0 ? collection_3[k] :  Infinity;

        if (num1 <= num2 && num1 <= num3){
            result.push(num1); i++;
        }
        else if (num2 <= num1 && num2 <= num3){
            result.push(num2); j++;
        }
        else {
            result.push(num3); k--;
        }
    }

    return result;
}