import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Sniply!');
    }
);

app.listen(port, () => {
    console.log(`Sniply listening at http://localhost:${port}`);
    }
);