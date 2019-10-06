export function applyLetterSpacing(string, count = 1) {
    return string.split('').join('\u200A'.repeat(count));
}

export function isEven(n = 0) {
    return n % 2 == 0
}