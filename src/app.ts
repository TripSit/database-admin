import express from 'express';
import morgan from 'morgan';

import helmet from 'helmet';

import {notFound, errorHandler} from './middlewares';
import api1 from './apiV1';
import api2 from './apiV2';

const app = express();

app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'This should be the main website. You likely want to go to /api/v2',
  });
});

app.use('/api/v1', api1);
app.use('/api/v2', api2);

app.use(notFound);
app.use(errorHandler);

export default app;