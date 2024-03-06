export class StockService {
    constructor() {
        this.stocks = [];
    }

    async getStockPrice(name) {
        const response = await fetch(`http://localhost:3000/stockprice/${name}`);
        if (!response.ok) {
            throw new Error('Error fetching data');
        }
        const data = await response.json();
        return data;
    }

    async addStock(stock) {
        // Asume que tienes una variable `apiUrl` que contiene la URL base de tu API
        const apiUrl = 'http://localhost:3000/stock';

        // Construir el cuerpo de la solicitud
        const stockData = {
            name: stock.name,
            purchase_date: stock.purchase_date,
            purchase_price: stock.purchase_price,
            quantity: stock.quantity,
            total: stock.total,
            change: stock.change,
            diff: stock.diff
        };
        console.log("adding stock")
        // Realizar la solicitud POST
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(stockData)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Stock added successfully:', data);
            return data;
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    }

    async getStocks() {
        const response = await fetch('http://localhost:3000/stock');
        const data = await response.json();
        this.stocks = data;
    }
}