import express, { Request, Response } from 'express';

import drugs from './drugs/drugs.routes';
import users from './users/users.routes';
import appeals from './appeals/appeals.routes';
import discord from './discord/discord.routes';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    welecome: `Welcome to TripSit's new API`,
    description: `This is the new API for TripSit's database. It is currently in development and is not yet ready for production use.`,
    publicEndpoints: [
      '/drugs',
    ],
    privateEndpoints: [
      '/users',
      '/appeals',
    ],
  });
});

router.use('/drugs', drugs);
router.use('/users', users);
router.use('/appeals', appeals);
router.use('/discord', discord);

export default router;
