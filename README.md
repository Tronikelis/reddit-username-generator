# Reddit random username generator

This is a _random_ reddit username generator, it automatically checks for availability and has some options

## How to use

-   have node installed
-   clone repo `git clone`
-   `npm run build && cd build`
-   `node index.js run [options]`

## Options

The tool's options and their explanations

```js
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
}
```

## Important notes

-   The length must be **equal or more** than the alphabet's length `-l 4 -a "QWERTY"` is wrong

-   The alphabet must include **at least** two distinct letters `-a "AA"` is wrong

-   The app is made by using recursion and with **Math.random()**, so very small alphabets could get a call stack overflow

## Examples

`node index.js run --help` prints out instructions

`node index.js run -l or --length 4` prints out available 4 letter usernames

`node index.js run -l 6 -a "REDDITreddit"` prints out the available usernames which have 6 letters and only these characters

## Visual example

![gif](https://user-images.githubusercontent.com/56039679/174862460-f6d03fef-c75e-40a1-8e7d-e9bdd22a3aec.gif)
