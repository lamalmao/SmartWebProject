import express from 'express';
import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

import signupRouter from './routers/register.js';
import archivist from './archivist.js';

dotenv.config({
  path: path.join(process.cwd(), 'properties.env'),
  encoding: 'utf-8'
});
const app = express();
const port = 778;

app.all('register', signupRouter);

const mode: string = process.env['MODE'] ? process.env['MODE'] : 'PRODUCTION';
const host = process.env['HOST'] ? process.env['HOST'] : '127.0.0.1';

var server;

if (mode === 'DEVELOPMENT') {
  server = http.createServer(app);

  app.use(function(req, _, next) {
    archivist.info(`Connection from ${req.ip} at ${new Date().toLocaleString('ru-RU')}\nRoute: ${req.route}\nURL: ${req.url}`);
    next();
  });

  app.get('/hello', (_, res) => {
    res.end('We are on line!');
  });

  console.log('Dev logger started');
} else if (mode === 'PRODUCTION') {
  const privateKey = fs.readFileSync(path.join(process.cwd(), 'private.pem')).toString();
  const certificate = fs.readFileSync(path.join(process.cwd(), 'cert.pem')).toString();

  const credentials = {
    key: privateKey,
    cert: certificate
  };

  server = https.createServer(credentials, app);
} else {
  console.log('Server not started by some reason');
  process.exit(-1);
}

server.listen(port, host, function() {
  console.log(`Server running in ${mode} mode at ${host}:${port}`);
});

