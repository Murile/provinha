import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import anime from './controller/endpoisnts.js';

const server = express();
server.use(cors());
server.use(express.json());

server.use(anime);

server.listen(process.env.PORT,() =>console.log(`a api esta online na porta${process.env.PORT}`));