import express from 'express';
import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import mainRouter from './routers/main.js';
import archivist from './archivist.js';
import notificationBot from './bot/index.js';
import mongoose from 'mongoose';
import settings from './settings.js';
import AuthMechanism from './auth-mechanism.js';
import cors from 'cors';

dotenv.config({
  path: path.join(process.cwd(), 'properties.env'),
  encoding: 'utf-8'
});

AuthMechanism.loadToken();

const app = express();
var port = Number(process.env['PORT']);

const mode: string = process.env['MODE'] ? process.env['MODE'] : 'PRODUCTION';
if (mode === 'DEVELOPMENT') {
  port = 80;
}

const host = process.env['HOST'] ? process.env['HOST'] : '127.0.0.1';

var server;

app.use(cors({
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

if (mode === 'DEVELOPMENT') {
  server = http.createServer(app);

  app.use(function(req, _, next) {
    archivist.info(`Connection from ${req.ip} at ${new Date().toLocaleString('ru-RU')}\nRoute: ${req.route}\nURL: ${req.url}`);
    console.log(req.body);
    console.log(req.rawHeaders);
    next();
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

mongoose.connect(settings.db);
app.use('/api', mainRouter);

if (process.env['RENDER'] === 'YES') {
  const renderPath = settings['renderPath'];
  if (!renderPath) {
    console.log('Render path is not provided');
    process.exit(-1);
  }

  app.use('/', express.static(renderPath));
  console.log('Render on.\nPath: ' + renderPath);
}

server.listen(port, host, function() {
  console.log(`Server running in ${mode} mode at ${host}:${port}`);
});

notificationBot.launch();
console.log('Notification bot launched');

