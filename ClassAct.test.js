const { default: expect } = require("expect");
const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

beforeAll(async () => {
    browser.browserBuild();
}, timeout);

beforeEach(async () => {
    await browser.browserNavigate('https://www.classact.company/');
}, timeout);

afterAll(async () => {
    await browser.browserExit();
}, timeout);


test("Navigate to Window cleaning", async () => {
    const element = await browser.getElement('menu-item-2679');
    await element.click();
    await browser.waitForElementByCss(':not(h3.main-title__secondary)');
    const heading = await browser.getElementByCss('h1.main-title__primary');
    const elementHeading = await heading.getText();
    expect(elementHeading).toBe('Window Cleaning and Reach & Wash');
    
})

test("Initially has a navigation bar with general maintenance", async () => {
    const element = await browser.getElement("menu-item-2684");
    const tagName = await element.getText();
    expect(tagName).toBe('GENERAL MAINTENANCE');
});

test("Initially has a navigation bar with upholstery", async () => {
    const element = await browser.getElement("menu-item-5329");
    const tagName = await element.getText();
    expect(tagName).toBe('UPHOLSTERY AND DEEP CLEAN');
});

