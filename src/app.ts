import express, { Application } from 'express';
import router from './routes/route';

const app: Application = express();
const port = process.env.PORT ?? 3001;

app.use(express.json());

app.get('/heath', (req, res) => {
    res.status(200).json({
        message: 'Server is healthy',
        timestamp: new Date().toISOString()
    });
})

app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})