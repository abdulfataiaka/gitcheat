import request from 'supertest';
import server from '../index';

describe('Testing help endpoints', () => {
  describe('/api/helps/1', () => {
    it('should respond with an array of helps', (done) => {
      request(server)
        .get('/api/helps/1')
        .expect(200)
        .end((error, response) => {
          const { helps } = response.body;
          expect(Array.isArray(helps)).toBe(true);
          expect(helps.length).toBe(1);
          expect(helps[0]._id).toBe(1);
          done();
        });
    });
  });
});
