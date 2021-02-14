const { Given } = require('cucumber');

Given('o usuário esta na url {string}', (url) => {
    const driver = global.driver;
    driver.get(url);
    
    return driver;
});