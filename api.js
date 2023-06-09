// load .env file and configs - this is the first thing to do
require('dotenv').config();
const { corsConfig, helmetConfig, rateLimitConfig } = require('./configs');
// load dependencies
const express = require('express');

// load routes
const personaRoute = require('./routes/persona');
const profileRoute = require('./routes/profile');

// initialize express app (API)
const api = express();

// load configurations and middlewares
api.use(corsConfig);
api.use(helmetConfig);
api.use(rateLimitConfig);
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.listen(process.env.PORT, ()=> console.log(`=> [API] listening on port ${process.env.PORT}`));

// load routes
api.get(['/','/profile'], profileRoute);
api.post('/persona', personaRoute);

