import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRoutes from '../routes/users';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes);

const PORT = 3010;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

export default app;