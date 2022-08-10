import express, { Request, Response } from 'express';
const app = express();
const PORT = process.env.PORT || 3183;

app.get('/', (req: Request, res: Response) => {
	res.send("Test API.");
});

app.listen(PORT, () => {
	console.log(`[SUCCESS]: Server listening on port ${PORT}`);
});