import { StockService } from './services/stockService.js';
import { StockView } from './views/stockView.js';
import { StockController } from './controllers/stockController.js';


const stockService = new StockService();
const stockView = new StockView();
const stockController = new StockController(stockService, stockView);

