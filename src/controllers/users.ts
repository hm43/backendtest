//import { db } from '../db/db';
import { user } from '../entities/elements/user';

export const getUsers = async () => {
    //const allUsers = await db.select().from(user);

    //return allUsers;
    return user;
};