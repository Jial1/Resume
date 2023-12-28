const { toggleTheme, changeFontSize } = require('./public/javascripts/mainpage.js');
const puppeteer = require('puppeteer');

// Mock the necessary DOM elements for testing
document.body.innerHTML = '<div class="container"></div>';

describe('toggleTheme', () => {
  test('should toggle dark mode on and off', () => {
    toggleTheme();
    expect(document.body.classList.contains('dark-mode')).toBe(true);

    toggleTheme();
    expect(document.body.classList.contains('dark-mode')).toBe(false);
  });
});

describe('changeFontSize', () => {
  test('should change font size', () => {
    changeFontSize(20);
    const contentContainer = document.querySelector('.container');
    expect(contentContainer.style.fontSize).toBe('20px');
  });
});

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

describe('End-to-End Tests', () => {
  test('should toggle theme on button click', async () => {
    await page.goto('http://localhost:your-port'); // Replace your-port with your actual port
    
    // Ensure the initial state is not in dark mode
    const bodyClassBefore = await page.$eval('body', (body) => body.classList.contains('dark-mode'));

    // Click the toggle theme button
    await page.click('#toggle-theme');

    // Ensure the body is in dark mode after the button click
    const bodyClassAfter = await page.$eval('body', (body) => body.classList.contains('dark-mode'));

    expect(bodyClassBefore).toBe(false);
    expect(bodyClassAfter).toBe(true);
  });

  // Add more Puppeteer tests as needed
});
