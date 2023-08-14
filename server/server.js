import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', router);


app.use(express.static(path.join(__dirname, './client/build')));
app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
    

const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT);
