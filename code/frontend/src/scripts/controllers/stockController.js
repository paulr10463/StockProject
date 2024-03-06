import Stock from '../models/stock.js';
import { areStockValuesValid } from '../utils.js';
import Swal from 'sweetalert2'

export class StockController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.addStockHandler(this.addStock.bind(this));
        this.renderStocks();
    }

    getChange(purchasedPrice, actualPrice) {
        return (((actualPrice - purchasedPrice)*100)/purchasedPrice).toFixed(2);
    }
        
    async addStock(stockInput) {
        const { stockName, purchasePrice, quantity } = stockInput;
        const purchaseDate = new Date().toISOString();
        if (areStockValuesValid(stockName, purchasePrice, quantity)) {
            try{
                const result = await this.model.getStockPrice(stockName);
                const current_price = result.lastClosePrice;
                const stock = new Stock(stockName, purchaseDate, purchasePrice.toFixed(2), quantity);
                const total_current = current_price * quantity;
                stock.change = this.getChange(stock.purchase_price, current_price);
                stock.diff = total_current;
                this.showInputDetails(stock);
            }
            catch (error){
                this.view.showPersonalizedError(error.message);
            }
        } else {
            this.view.showInputError();
            return;
        }
    }

    showInputDetails(stock) {
        Swal.fire({
            title: "Se ejecutará la siguiente transacción",
            icon: "info",
            html: `
                <p>Nombre: ${stock.name}</p>
                <p>Precio de compra: ${stock.purchase_price}</p>
                <p>Cantidad: ${stock.quantity}</p>
                <p>Total: ${stock.total}</p>
                <p>Cambio: ${stock.change}</p>
                <p>Diferencia: ${stock.diff}</p>
            `,
            confirmButtonColor: "#3085d6",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                try{
                    this.model.addStock(stock);
                    this.view.cleanFields();
                    this.view.displayStock(stock);
                    //this.showConfirmationMessage();
                }catch{ 
                    this.showErrorMessage();
                } 
            }
        });
    }

    renderStocks() {
        this.model.getStocks().then(() => {
            this.model.stocks.forEach(stock => this.view.displayStock(stock));
        });
    }
}