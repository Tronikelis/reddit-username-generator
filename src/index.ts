import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import searcher from "./searcher";
import chalk from "chalk";

const log = console.log;

yargs(hideBin(process.argv))
    .scriptName("reddit-nanoid")
    .usage("$0 <cmd> [args]")

    .command(
        "run",
        "starts searching & generating usernames",
        yargs => {
            yargs.options({
                iterations: {
                    alias: "i",
                    type: "number",
                    default: 0,
                    describe:
                        "specify the amount of usernames you want to check, the value will get multiplied by a thousand, 0 = maximum possible combinations",
                },
                alphabet: {
                    alias: "a",
                    type: "string",
                    default:
                        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-",
                    describe:
                        "letters which will be randomly chosen for the user name, e.g provider 'abc', turns to 'cba', 'bca' ...",
                },
                length: {
                    alias: "l",
                    type: "number",
                    default: 4,
                    describe: "how many letters to include in the username, minimum 3",
                },
            });
        },
        async ({ alphabet, length, iterations }: any) => {
            const start = searcher({
                alphabet,
                length,
                iterations: iterations * 1e3,
            });

            const usernames = await start();
            log(chalk.green(usernames.join("\n")));
        }
    )

    .help()
    .parse();
