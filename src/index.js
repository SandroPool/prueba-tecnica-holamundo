import express from 'express';
import { myConnection } from './db/connection.js';
import MapsRoutes from './routes/maps.routes.js'
import cors from 'cors';

//variables
const app = express();
const c = console.log;

app.set('port', process.env.POR || 5000);
myConnection();


//midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use(MapsRoutes);

app.listen(app.get('port'), _ => c(`SERVER READY http://127.0.0.1:${app.get('port')}`));

