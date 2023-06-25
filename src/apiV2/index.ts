import express from 'express';

import drugs from './drugs/drugs.routes';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: `Welcome to TripSit's new API`,
  });
});

router.use('/drugs', drugs);

export default router;