import TokenManager from '../security/token-manager.js';
import { AuthenticationError, InvariantError } from '../exceptions/index.js';

const authenticationMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader) {
      throw new InvariantError('Token tidak ditemukan');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new InvariantError('Token tidak valid');
    }

    const decoded = TokenManager.verify(token, process.env.ACCESS_TOKEN_KEY);
    req.user = decoded;

    next();
  } catch (error) {
    next(new AuthenticationError('Autentikasi gagal'));
  }
};

export default authenticationMiddleware;
