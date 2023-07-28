import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to TripSit\'s original API, preserved for legacy purposes.',
  });
});

export default router;
