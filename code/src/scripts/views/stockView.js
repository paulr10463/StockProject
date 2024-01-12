import Swal from 'sweetalert2'

// stockView.js
export class StockView {
    constructor() {
        this.stockTable = document.getElementById("stockTable").getElementsByTagName('tbody')[0];
        this.stockNameInput = document.getElementById('stockName');
        this.purchaseDateInput = document.getElementById('purchaseDate');
        this.purchasePriceInput = document.getElementById('purchasePrice');
        this.quantityInput = document.getElementById('quantity');
        this.submitButton = document.getElementById('submitButton');
    }

    cleanFields() {
        this.stockNameInput.value = '';
        this.purchaseDateInput.value = '';
        this.purchasePriceInput.value = '';
        this.quantityInput.value = '';
    }

    displayStock(stock) {
        const newRow = this.stockTable.insertRow(this.stockTable.rows.length);
        const cells = [
            stock.name,
            stock.quantity,
            stock.date,
            stock.price,
            stock.totalCost
        ];

        cells.forEach((value, index) => {
            const cell = newRow.insertCell(index);
            cell.innerHTML = value;
        });
    }

    getStockInput() {
        const stockName = this.stockNameInput.value;
        const purchaseDate = this.purchaseDateInput.value;
        const purchasePrice = parseFloat(this.purchasePriceInput.value);
        const quantity = parseInt(this.quantityInput.value);

        return { stockName, purchaseDate, purchasePrice, quantity };
    }

    showInputError() {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, llene todos los campos",
            confirmButtonColor: "#3085d6",
          });
    }

    addStockHandler(callback) {
        this.submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            const stockInput = this.getStockInput();
            callback(stockInput);
        });
    }
}