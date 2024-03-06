export default class Stock {
    constructor(name, date, price, quantity, change, diff) {
        this.name = name;
        this.purchase_date = date;
        this.purchase_price = price;
        this.quantity = quantity;
        this.total = price * quantity;
        this.change = change;
        this.diff = diff;
    }
}