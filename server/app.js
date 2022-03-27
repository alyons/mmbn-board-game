import express from 'express';
import path from 'path';
import { applyWebpackDevHotMiddleware } from './development/hotReload';

const DIST_DIR = __dirname; // eslint-disable-line no-undef
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

if (NODE_ENV === 'development') {
  applyWebpackDevHotMiddleware(app);
}

app.use(express.static(DIST_DIR));
app.use(express.json());

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

export default app;
