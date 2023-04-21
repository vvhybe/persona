// load .env file
require('dotenv').config();
// load dependencies
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// `CORS` configuaration
const corsConfig = cors({
    origin: "*", // allow all origins - because this is an API
    methods: process.env.CORS_METHODS, // allow only GET, POST
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}); 

// `helmet` configuration for the API
const helmetConfig = helmet({
    contentSecurityPolicy: false, // disable `contentSecurityPolicy`
    noSniff: true // enable `noSniff`,
});

// `rateLimit` configuration for the API
const rateLimitConfig = rateLimit({
    windowMs: process.env.RATE_LIMIT_WINDOW_MS, // 1 minutes,
    max: process.env.RATE_LIMIT_MAX, // limit each IP to 30 requests per windowMs
    message: process.env.RATE_LIMIT_MESSAGE // message to send
});

// export configurations
module.exports = { corsConfig, helmetConfig, rateLimitConfig };

