import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRoutes from '../routes/users';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/', userRoutes);

if (process.env.ENV == "Dev") {
    const PORT = 3010;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}


export default app;