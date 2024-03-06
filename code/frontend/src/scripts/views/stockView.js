import Swal from 'sweetalert2'

// stockView.js
export class StockView {
    constructor() {
        this.stockTable = document.getElementById("stockTable").getElementsByTagName('tbody')[0];
        this.stockNameInput = document.getElementById('stockName');
        this.purchasePriceInput = document.getElementById('purchasePrice');
        this.quantityInput = document.getElementById('quantity');
        this.submitButton = document.getElementById('submitButton');
        this.overlayContent = document.getElementById('overlay-content-content');
    }

    cleanFields() {
        this.stockNameInput.value = '';
        this.purchasePriceInput.value = '';
        this.quantityInput.value = '';
    }

    displayStock(stock) {
        const newRow = this.stockTable.insertRow(this.stockTable.rows.length);
        const cells = [
            stock.name,
            stock.purchase_date,
            stock.purchase_price,
            stock.quantity,
            stock.total,
            stock.change,
            stock.diff,
        ];

        cells.forEach((value, index) => {
            const cell = newRow.insertCell(index);
            cell.innerHTML = value;
        });
    }

    getStockInput() {
        const stockName = this.stockNameInput.value;
        const purchasePrice = parseFloat(this.purchasePriceInput.value);
        const quantity = parseInt(this.quantityInput.value);

        return { stockName, purchasePrice, quantity };
    }

    showInputError() {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, llene todos los campos",
            confirmButtonColor: "#3085d6",
          });
    }

    
    showPersonalizedError(message) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: message,
            confirmButtonColor: "#3085d6",
          });
    }

    showConfirmationMessage() {
        Swal.fire({
            icon: "success",
            title: "¡Transacción exitosa!",
            text: "La transacción se ha realizado con éxito",
            confirmButtonColor: "#3085d6",
          });
    }

    showErrorMessage() {
        Swal.fire({
            icon: "error",
            title: "¡Transacción no registrada!",
            text: "Hubo un error en el registro",
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