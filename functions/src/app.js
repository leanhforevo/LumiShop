import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import { captureRawBody } from './middleware/rawBody.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(captureRawBody);
app.use('/api', router);

export default app;
