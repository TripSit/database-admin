import supertest from 'supertest';

import app from '../app';

describe('GET /api/v2', () => {
  it('should respond with a message', async () => {
    const response = await supertest(app)
      .get('/api/v2')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message)
      .toEqual(`Welcome to TripSit's new API`);
  });
});
