import express from 'express';
import checkAuth from '../utils/checkAuth';

import users from './users.queries';

const F = f(__filename);

const router = express.Router();

router.get('/', async (req, res) => {
  if (await checkAuth(req, res)) {
    log.debug(F, 'Getting all users');
    const result = await users.getAllUsers();
    res.json(result);
  }
});

router.get('/:discordId', async (req, res, next) => {
  if (await checkAuth(req, res)) {
    const { discordId } = req.params;
    log.debug(F, `discordId: ${discordId}`);
    try {
      if (discordId === 'error') throw new Error('error');
      const result = await users.getUser(discordId);
      if (result) {
        log.debug(F, `Returning result: ${JSON.stringify(result)}`);
        return res.json(result);
      }
      return next();
    } catch (error) {
      return next(error);
    }
  }
});

export default router;