export default function timeoutPromise(ms = 300) {
    return new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });
}
