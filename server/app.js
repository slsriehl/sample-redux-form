const util = require('util');

const dotenv = process.env.NODE_ENV === 'development' ?
	require('dotenv').config({BASIC: 'basic', path: './env/.env.dev'})
:
	null;

//++++++ express config ++++++
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//set body parser on express middleware
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json({
	limit: '300mb'
}));

//serve the static assets from the public directory
app.use(express.static(__dirname + '/../public'));

//++++++ logging config ++++++
const logger = require('../logs/server/config');

logger.info(`Node environment: ${process.env.NODE_ENV}`);


//++++++ sessions ++++++

const session = require('express-session');

//decode proxy value boolean from environment variable for options object below
const proxy = process.env.PROXY_VALUE == '1' ? true : false;

//set session middleware options
app.use(session({
	secret: 'foo'/* process.env.SESSION_SECRET */,
	resave: false,
	//don't save sessions with nothing in them
	saveUninitialized: false,
	proxy,
	//cookie options
	cookie: {
		secure: true,
		maxAge: 1000 * 60 * 60 * 24 * 3,
		expires: false
	}
}));

//++++++ authentication ++++++
//require our authentication functions and the built in passport middleware
const passport = require('passport');
const user = require('./auth/serialize')

//set passport express middleware
app.use(passport.initialize());
app.use(passport.session());

//add user to session
passport.serializeUser(user.serialize);

//read user from session and look up identifying info
passport.deserializeUser(user.deserialize);

app.use((req, res, next) => {
	if(req.user) {
		console.log(`REQ.USER ${util.inspect(req.user, {depth: null})}`);
	}
	next();
});

//+++++ set domain on session from url ++++++
const setDomain = require('./middleware/set-domain');

app.use(setDomain);

//++++++ clear session messages on each request ++++++
const clearMessages = require('./middleware/clear-messages');

app.use(clearMessages);

//++++++ view engines for HBS and React (serve files with certain extensions in the express res.render function) +++++

//require handlebars
const hbs = require('express-handlebars');

//require react view package
const exrpv = require('express-partial-react-views');

//configure the handlebars engine
const hbsEngine = hbs({
	extname: '.hbs',
	defaultLayout: 'main',
	layoutsDir: __dirname + '/views/layouts/',
	partialsDir: __dirname + '/views/partials/',
	helpers: {}
});

//configure the react engine
const reactEngine = exrpv.createEngine();

//set the directory that holds the views for express
app.set('views', __dirname + '/../views');

//set the directory that contains the react higher-order components for express
app.set('reactComponentFolder', __dirname + '/react/higher-order');

//pass the two view engines to express
app.engine('html', reactEngine);
app.engine('hbs', hbsEngine);

//set the default view engine for express
app.set('view engine', 'hbs');


//++++++ ROUTES ++++++

//import routes
const router = {
	api: {
		user: require('./routes/api/user'),
		forms: require('./routes/api/forms'),
	// 	survey: require('./routes/api/survey')
	},
	views: {
		user: require('./routes/views/user'),
		react: require('./routes/views/react')
	}
}

//pass express the routes

app.use('/api/user', router.api.user);
app.use('/api/forms', router.api.forms);
// app.use('/api/survey', router.api.survey);

app.use('/', router.views.user);
app.use('/', router.views.react);

//export the express app instance so the server can connect using it (imported in server.js)
module.exports = app;
