import pool from '../config/database';
import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json({ users: result.rows });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
            [name, email]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};