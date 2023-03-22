export function putDelay(ms) {
    return new Promise((res) => setTimeout(res, ms));
}
