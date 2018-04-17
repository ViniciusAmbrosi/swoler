import http from 'http';
import config from './config';

const server = http.createServer((req, res) => {
    res.end('You will get Swoler soon!');
});

server.listen(config.port, config.hostname, () => {
    console.log(`Server running on http://${config.hostname}:${config.port}/`);
});
