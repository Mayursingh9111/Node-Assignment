const express = require('express');
const app = express();

// Display Developer Name
console.log("Mayur Singh Shekhawat");

// Custom Logging Middleware
app.use((req, res, next) => {
    const start = Date.now();
    const { method, url } = req;
    //   console.log(req.method);
    //   console.log(req.url);

    const timestamp = new Date().toString();


    const duration = Date.now() - start;
    console.log(`[${timestamp}] ${method} ${url} - ${res.statusCode} - ${duration}ms`);


    next();
});

// Sample Route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
