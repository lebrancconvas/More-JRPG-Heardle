import express, { Request, Response } from 'express';
import router from './routes/router';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3183;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
	console.log(`[SUCCESS]: Server listening on port ${PORT}`);
});