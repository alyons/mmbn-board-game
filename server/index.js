import http from 'http';
import webpack from 'webpack';

import app from './app';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT);
