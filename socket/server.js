const app = require("../middleware")
const { createServer } = require('node:http');
const server = createServer(app);



module.exports = {server,app}