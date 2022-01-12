let { Client } = require('redis-om')
let REDIS_URL= process.env.REDIS_URL;
let client = new Client();
(async () => {
    try {
        await client.open(REDIS_URL); 
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = client;