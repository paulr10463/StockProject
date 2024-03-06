function isNumericAndPositive(value) {
    return !isNaN(value) && value > 0;
}

function isBlank(value) {
    return value === '';
}

export function areStockValuesValid(stockName, purchasePrice, quantity) {
    return isNumericAndPositive(purchasePrice) && isNumericAndPositive(quantity) && !isBlank(stockName);
}

