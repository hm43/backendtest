import express from 'express';
import { getUsers } from '../controllers/users';

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await getUsers();
    console.log("users: ", users);
    res.json(users);
});

export default router;
