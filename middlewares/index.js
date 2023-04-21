// Custom middlewares

/**
 * `ConsoleMiddleware` logs the request method, url, status code and elapsed time in milliseconds.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const consoleMiddleware = (req, res, next)=>{
    const start = Date.now();
    res.on("finish", ()=>{
        const elapsed = Date.now() - start;
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode} (${elapsed}ms)`);
    });
    next();
}