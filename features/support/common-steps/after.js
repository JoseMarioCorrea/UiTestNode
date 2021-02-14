const { After } = require("cucumber");

After(async () => {
    const driver = global.driver;
    await driver.quit();
});