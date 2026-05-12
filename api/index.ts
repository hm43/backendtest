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

export default app;