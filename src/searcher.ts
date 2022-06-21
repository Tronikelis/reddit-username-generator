import axios from "axios";
import chalk from "chalk";

import factorial from "./utils/factorial";
import timeoutPromise from "./utils/timeoutPromise";
import randomUsername from "./utils/randomUsername";

const log = console.log;

interface SearcherProps {
    iterations: number;
    alphabet: string;
    length: number;
}

const searcher = ({ alphabet, length, iterations }: SearcherProps) => {
    let count = 0;

    const cache = new Set<string>([]);
    const usernames = new Set<string>([]);

    const maximumCombinations = factorial(alphabet.length, length);

    log(chalk("Maximum combinations:", chalk.underline(maximumCombinations)));

    const iterator = async (): Promise<string[]> => {
        if (iterations && count > iterations) return Array.from(usernames);
        if (count >= maximumCombinations) return Array.from(usernames);

        const username = randomUsername(alphabet, length, cache);

        const { data } = await axios.get(
            `https://www.reddit.com/api/username_available.json?user=${encodeURIComponent(
                username
            )}`
        );

        if (typeof data === "boolean" && data) {
            usernames.add(username);
            log(chalk("Available username:", chalk.green.underline(username)));
        }

        if (typeof data !== "boolean")
            log(chalk("Error, probably invalid username:", chalk.red.underline(username)));

        log(chalk("Checked:", chalk.magenta(username)));

        cache.add(username);
        count++;

        return iterator();
    };

    return iterator;
};

export default searcher;
