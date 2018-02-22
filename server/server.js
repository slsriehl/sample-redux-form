
//logger
const logger = require('../logs/server/config');

const app = require('./app');

const PORT = process.env.PORT || 3000;


//use https in development and testing, proxy http for production
// if(process.env.NODE_ENV != 'production') {
// 	const fs = require('fs');
// 	const https = require('https');
// 	const privateKey  = fs.readFileSync('./ssl.key', 'utf8');
// 	const certificate = fs.readFileSync('./ssl.crt', 'utf8');
// 	const httpsServer = https.createServer({key: privateKey, cert: certificate}, app);
// 	httpsServer.listen(PORT, function() {
// 		logger.info("express: secure development/test server listening to your mom on PORT: " + PORT);
// 	});
// } else {
	app.listen(PORT, () => {
		logger.info(`express: ${process.env.NODE_ENV} server listening to your mom on PORT: ${PORT}`);
	});
// }
