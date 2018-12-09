import request from 'supertest';
import server from '../index';

describe('Testing category endpoints', () => {
  describe('/api/categories', () => {
    it('should respond with an array of categories', (done) => {
      request(server)
        .get('/api/categories')
        .expect(200)
        .end((error, response) => {
          const { categories } = response.body;
          expect(Array.isArray(categories)).toBe(true);
          expect(categories.length).toBe(2);
          expect(categories[0].name.toLowerCase()).toBe('installation');
          expect(categories[1].name.toLowerCase()).toBe('authorization');
          done();
        });
    });
  });
});
