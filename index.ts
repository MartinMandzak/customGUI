import http from 'http'

const server = http.createServer((req, res) => {
 res.write('Hello, World!');
 res.end();
});

const test_port = 3000;
const domain = 'webska.net';
server.listen(domain, () => {
 console.log(`Server is running at http://localhost:${domain}`);
});

