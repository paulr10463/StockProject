import { StockService } from '../src/scripts/services/stockService';
import { StockView } from '../src/scripts/views/stockView';
import { StockController } from '../src/scripts/controllers/stockController';

const stockService = new StockService();
const stockView = null;
const stockController = new StockController(stockService, stockView);

test('No añadir una acción si no tiene nombre', () => {
    const pastLength = stockService.getStocks().length;
    const stockInput = { stockName: '', purchaseDate: '2021-01-01', purchasePrice: 100, quantity: 10 };
    stockController.addStock(stockInput);
    expect(stockService.getStocks().length).toBe(pastLength);
  });

  test('No añadir una acción si no tiene fecha', () => {
    const pastLength = stockService.getStocks().length;
    const stockInput = { stockName: 'TSLA', purchaseDate: '', purchasePrice: 100, quantity: 10 };
    stockController.addStock(stockInput);
    expect(stockService.getStocks().length).toBe(pastLength);
  });

  test('No añadir una acción si no tiene precio', () => {
    const pastLength = stockService.getStocks().length;
    const stockInput = { stockName: 'TSLA', purchaseDate: '2021-01-01', purchasePrice: null, quantity: 10 };
    stockController.addStock(stockInput);
    expect(stockService.getStocks().length).toBe(pastLength);
  });

  test('No añadir una acción si no tiene cantidad', () => {
    const pastLength = stockService.getStocks().length;
    const stockInput = { stockName: 'TSLA', purchaseDate: '2021-01-01', purchasePrice: 100, quantity: null };
    stockController.addStock(stockInput);
    expect(stockService.getStocks().length).toBe(pastLength);
  });