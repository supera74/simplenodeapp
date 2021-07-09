# create index.js and paste the following
# creates a server object in a variable named server
# takes in a request and response function
# outputs a response to the browser
# checks for the environment variable 'process.env.PORT`, or 5000 if not available
# then just output this string to the console

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Hello, World</h1>');
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));