import { areStockValuesValid } from '../src/scripts/utils';


test('No añadir una acción si no tiene nombre', () => {
    expect(areStockValuesValid('', '2021-01-01', 100,10)).toBe(false);
  });

  test('No añadir una acción si no tiene fecha', () => {
    expect(areStockValuesValid('TSLA', '', 100,10)).toBe(false);
  });

  test('No añadir una acción si no tiene precio', () => {
    expect(areStockValuesValid('TSLA', '2021-01-01', null,10)).toBe(false);
  });

  test('No añadir una acción si no tiene cantidad', () => {
    expect(areStockValuesValid('TSLA', '2021-01-01', 100,null)).toBe(false);
  });

  test('Añadir una acción si tiene todos los items', () => {
    expect(areStockValuesValid('TSLA', '2021-01-01', 100, 21.21)).toBe(true);
  });