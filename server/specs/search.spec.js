import request from 'supertest';
import server from '../index';

describe('Testing search endpoints', () => {
  describe('/api/search', () => {
    it('should respond with helps', (done) => {
      request(server)
        .post('/api/search')
        .send({ query: 'hello' })
        .expect(200)
        .end((error, response) => {
          const { helps } = response.body;
          expect(helps).toBe([]);
          done();
        });
    });
  });
});
