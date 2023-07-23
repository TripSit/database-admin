import express from 'express';
import checkAuth from '../utils/checkAuth';

import discord from './discord.queries';

const F = f(__filename);

const router = express.Router();

// router.get('/', async (req, res) => {
//   if (await checkAuth(req, res)) {
//     const result = await appeals.getAllAppeals();
//     res.json(result);
//   }
// });

router.get('/bans/:userId', async (req, res, next) => {
  if (await checkAuth(req, res)) {
    const { userId } = req.params;
    log.debug(F, `userId: ${userId}`);
    try {
      if (userId === 'error') throw new Error('error');
      const result = await discord.getBans(userId);
      if (result) {
        return res.json(result);
      }
      return next();
    } catch (error) {
      return next(error);
    }
  }
});


export default router;