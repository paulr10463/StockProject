export class StockService {
    constructor() {
        this.stocks = [];
    }

    addStock(stock) {
        this.stocks.push(stock);
    }

    getStocks() {
        return this.stocks;
    }
}