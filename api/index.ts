import 'dotenv/config';
import express from 'express';
import cors from 'cors';
// import userRoutes from '../routes/users';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! from Houda');
});

// app.use('/api/users', userRoutes);

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3010;

if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

export default app;