import express from 'express';
import router from './routes/router.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], 
    credentials: true 
}));

app.use(express.json());

app.use('/api', router);


export default app;


