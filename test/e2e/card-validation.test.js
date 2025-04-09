const puppeteer = require('puppeteer');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch(require('../../puppeteer.config'));
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

test('Корректный номер карты проходит валидацию', async () => {
  await page.goto('http://localhost:8081');

  const cardInput = await page.$('#card-number');
  const result = await page.$('#result');

  // Вводим корректный номер карты Visa
  await cardInput.type('4111111111111111');

  // Ожидание появления текста валидации
  await page.waitForFunction(
    () => document.getElementById('result').textContent.includes('✅ Валидная карта')
  );

  const text = await result.evaluate(el => el.textContent);
  expect(text).toBe('✅ Валидная карта');
});

test('Некорректный номер карты не проходит валидацию', async () => {
    await page.goto('http://localhost:3000');
  
    const cardInput = await page.$('#card-number');
    const result = await page.$('#result');
  
    // Вводим некорректный номер карты
    await cardInput.type('1234567812345678');
  
    // Ожидание появления текста валидации
    await page.waitForFunction(
      () => document.getElementById('result').textContent.includes('❌ Невалидная карта')
    );
  
    const text = await result.evaluate(el => el.textContent);
    expect(text).toBe('❌ Невалидная карта');
  });
  