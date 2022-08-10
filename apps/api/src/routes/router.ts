import express, { Router, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import SpotifyWebApi from 'spotify-web-api-node';

dotenv.config();
const router: Router = express.Router();

const spotifyAPI = new SpotifyWebApi({
	clientId: process.env.SPOTIFY_CLIENT_ID,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
	redirectUri: "http://localhost:3183/callback",
});

const token: string = process.env.SPOTIFY_API_TOKEN || "";
const playlist = process.env.SPOTIFY_PLAYLIST || "";

router.use((req: Request, res: Response, next: NextFunction) => {
	console.log(`[${req.method}]: ${req.url}`);
	next();
});

router.get('/', (req: Request, res: Response) => {
	res.redirect(spotifyAPI.createAuthorizeURL([
		"ugc-image-upload",
		"user-read-recently-played",
		"user-read-playback-state",
		"user-top-read",
		"app-remote-control",
		"playlist-modify-public",
		"user-modify-playback-state",
		"playlist-modify-private",
		"user-follow-modify",
		"user-read-currently-playing",
		"user-follow-read",
		"user-library-modify",
		"user-read-playback-position",
		"playlist-read-private",
		"user-read-email",
		"user-read-private",
		"user-library-read",
		"playlist-read-collaborative",
		"streaming"
	], "http://localhost:3183/callback"));
});

spotifyAPI.setAccessToken(token);

router.get('/api/v1/user', async(req: Request, res: Response) => {
	try {
		const response = await spotifyAPI.getMe();
		const userData = response.body;
		res.status(200).json(userData);
	} catch(err) {
		console.error(err);
		console.log('[FAILURE] Can\'t get User from API.');
	}
});

router.get('/api/v1/tracks', async(req: Request, res: Response) => {
	try {
		const response = await spotifyAPI.getPlaylist("6TqjIqjS5wIPuKHNaRd6jl");
		const tracks = response.body.tracks.items;
		res.status(200).json(tracks);
	} catch(err) {
		console.error(err);
		console.log('[FAILURE] Can\'t get Playlists from API.');
		res.status(404).json({ err: err});
	}
});

router.get('/api/v1/tracks/:id', async(req: Request, res: Response) => {
	try {
		const response = await spotifyAPI.getPlaylist("5tn9Iz0hK37aDGJBTAwr51");
		const tracks = response.body.tracks.items;
		const track = tracks.filter((item, index) => parseInt(req.params.id) === index + 1);
		res.status(200).json(track);
	} catch(err) {
		console.error(err);
		console.log('[FAILURE] Can\'t get Playlists from API.');
		res.status(404).json({ err: err});
	}
});


export default router;