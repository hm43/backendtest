import express from 'express';
import { getUsers } from '../controllers/users';

const router = express.Router();

router.get('/', async (req, res) => {
    //const users = await getUsers();
    const users = await "hello world";
    console.log("users: ", users);
    res.json(users);
});

export default router;
