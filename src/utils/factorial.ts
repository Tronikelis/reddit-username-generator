export default function factorial(num: number, length: number) {
    let final = 1;

    for (let i = 0; i < length; i++) {
        final *= num - i;
    }

    return final;
}
