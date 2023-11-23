export default class Stock {
    constructor(name, date, price, quantity) {
        this.name = name;
        this.date = date;
        this.price = price;
        this.quantity = quantity;
        this.totalCost = price * quantity;
    }
}