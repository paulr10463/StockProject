export function isNumericAndPositive(value) {
    return !isNaN(value) && value > 0;
}

export function isBlank(value) {
    return value === '';
}

