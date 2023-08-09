import express from 'express';
import router from "./routes/router.js";
import cors from 'cors';
import DBconnection from './database/db.js';

const PORT = 8888;

const app = express();

app.use(cors());

app.use('/', router);

DBconnection();

app.listen(PORT, () => 
    console.log(`The server is running on the port number ${PORT}`
));