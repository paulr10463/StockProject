import Stock from '../models/stock.js';
import { areStockValuesValid } from '../utils.js';

export class StockController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.addStockHandler(this.addStock.bind(this));
        this.renderStocks();
    }

    addStock(stockInput) {
        const { stockName, purchaseDate, purchasePrice, quantity } = stockInput;
        if (areStockValuesValid(stockName, purchaseDate, purchasePrice, quantity)) {
            const stock = new Stock(stockName, purchaseDate, purchasePrice, quantity);
            this.model.addStock(stock);
            this.view.displayStock(stock);
            this.view.cleanFields();
        } else {
            this.view.showInputError();
            return;
        }
    }
}