//logging package
const winston = require('winston');
//packages to write logs to file
const rotateFile = require('winston-daily-rotate-file');
const fs = require('fs');
//format the time for the logger
const tsFormat = () => (new Date()).toLocaleTimeString();
//create directories for logs if none exists
const logDir = 'logs';
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
if (!fs.existsSync(`${logDir}/server`)) fs.mkdirSync(`${logDir}/server`);
if (!fs.existsSync(`${logDir}/server/${process.env.NODE_ENV}`)) fs.mkdirSync(`${logDir}/server/${process.env.NODE_ENV}`);

//instantiate and configure the logger
const logger = new (winston.Logger) ({
	transports: [
		// colorize the output to the console
		new (winston.transports.Console)({
			timestamp: tsFormat,
			colorize: true,
			prettyPrint: true,
			level: 'info'
		}),
		new (rotateFile)({
			filename: `${logDir}/server/${process.env.NODE_ENV}/-results.log`,
			timestamp: tsFormat,
			datePattern: 'yyyy-MM-dd',
			prepend: true,
			level: 'debug'
		})
	]
});

module.exports = logger;
