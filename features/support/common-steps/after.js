const { After } = require('@cucumber/cucumber');

After(async () => {
    const driver = global.driver;
    await driver.quit();
});