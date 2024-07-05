// pages/api/auth/register.js
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstname, lastname, email, phone, password } = req.body;

  if (!firstname || !lastname || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nextjs_auth'
  });

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const [result] = await connection.execute(
      'INSERT INTO users (firstname, lastname, email, phone, password) VALUES (?, ?, ?, ?, ?)',
      [firstname, lastname, email, phone, hashedPassword]
    );
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  } finally {
    connection.end();
  }
}
