import Stock from '../models/stock.js';
import { isNumericAndPositive , isBlank } from '../utils.js';

export class StockController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.addStockHandler(this.addStock.bind(this));
        this.renderStocks();
    }

    addStock(stockInput) {
        const { stockName, purchaseDate, purchasePrice, quantity } = stockInput;
        if (this.areStockValuesValid(stockName, purchaseDate, purchasePrice, quantity)) {
            const stock = new Stock(stockName, purchaseDate, purchasePrice, quantity);
            this.model.addStock(stock);
            this.view.displayStock(stock);
            this.view.cleanFields();
        } else {
            this.view.showInputError();
            return;
        }
    }

    areStockValuesValid(stockName, purchaseDate, purchasePrice, quantity) {
        return isNumericAndPositive(purchasePrice) && isNumericAndPositive(quantity) && !isBlank(stockName) && !isBlank(purchaseDate);
    }

    renderStocks() {
        const stocks = this.model.getStocks();
        stocks.forEach(stock => this.view.displayStock(stock));
    }
}