import express from 'express';

import drugDB from './drugs.queries';

const router = express.Router();

router.get('/', async (req, res) => {
  const drugs = await drugDB.getAllDrugs();
  res.json(drugs);
});

router.get('/:name', async (req, res, next) => {
  const { name } = req.params;
  console.log('name', name);
  try {
    if (name === 'error') throw new Error('error');
    const drug = await drugDB.getDrug(name);
    if (drug) {
      return res.json(drug);
    }
    return next();
  } catch (error) {
    return next(error);
  }
});


export default router;