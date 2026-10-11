import pool from '../../../config/db.js';
import bcrypt from 'bcrypt';

class UserRepositories {
  async createUser({ username, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = {
      text: 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id',
      values: [username, hashedPassword],
    };

    const result = await pool.query(query);
    return result.rows[0].id;
  }

  async verifyNewUsername(username) {
    const query = {
      text: 'SELECT username FROM users WHERE username = $1',
      values: [username],
    };

    const result = await pool.query(query);
    return result.rows.length > 0;
  }

  async verifyUserCredential({ username, password }) {
    const query = {
      text: 'SELECT id, password FROM users WHERE username = $1',
      values: [username],
    };

    const user = await pool.query(query);
    console.log(user.rows);

    if (!user.rows.length) {
      return null;
    }

    const { id, password: hashedPassword } = user.rows[0];
    const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordMatch) {
      return null;
    }

    return id;
  }

  async getUserLogged(userId) {
    const query = {
      text: 'SELECT username FROM users WHERE id = $1',
      values: [userId],
    };

    const result = await pool.query(query);
    return result.rows[0];
  }
}

export default new UserRepositories();
