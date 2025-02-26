const express = require('express');
const morgan = require('morgan');
const app = express();

// Developer Info
console.log("Developer: Mayur Singh Shekhawat");

// Start Request Logging (Pipeline Begins)
const startLogger = (req, res, next) => {
  req.startTime = Date.now(); // Attach start time to the request object
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
};

// Log IP Address
const ipLogger = (req, res, next) => {
  req.clientIP = req.ip;
  console.log(`Request from IP: ${req.clientIP}`);
  next();
};

// Track Time Taken for Response
const endLogger = (req, res, next) => {
  res.on('finish', () => {
    const duration = Date.now() - req.startTime;
    console.log(
      `Request Completed - Method: ${req.method}, URL: ${req.url}, IP: ${req.clientIP}, Status: ${res.statusCode}, Time: ${duration}ms`
    );
  });
  next();
};

//Using Morgan (Advanced Logger)
app.use(morgan('combined'));

// Apply the Middleware Pipeline Globally
app.use(startLogger);
app.use(ipLogger);
app.use(endLogger);

// Sample Route
app.get('/', (req, res) => {
  res.send('Welcome to Express Middleware Pipelines!');
});

// Another Route
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
