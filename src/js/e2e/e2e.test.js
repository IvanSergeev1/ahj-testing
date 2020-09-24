import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('Validate Widget ', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: true,
      slowMo: 100,
      devtools: false,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  describe('Validate Widget ', () => {
    test('should add "valid" class for valid card number', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[id=validate_form]');
      const input = await form.$('[id=validate_input]');
      await input.type('3530111333300000');
      const submit = await form.$('[id=validate_button]');
      submit.click();
      await page.waitForSelector('[id=validate_input].valid');
    });
    test('should add "invalid" class for valid card number', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[id=validate_form]');
      const input = await form.$('[id=validate_input]');
      await input.type('5555555255554444');
      const submit = await form.$('[id=validate_button]');
      submit.click();
      await page.waitForSelector('[id=validate_input].invalid');
    });
  });
});
