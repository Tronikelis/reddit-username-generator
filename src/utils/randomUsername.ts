export default function randomUsername(
    alphabet: string,
    length: number,
    taken: Set<string>
): string {
    let name = "";
    let alphabetArray = Array.from(alphabet);

    while (taken.has(name) || !name) {
        name = "";
        alphabetArray = Array.from(alphabet);

        for (let i = 0; i < length; i++) {
            const idx = Math.round(Math.random() * (alphabetArray.length - 1));
            name += alphabetArray[idx];
            alphabetArray.splice(idx, 1);
        }
    }

    return name;
}
