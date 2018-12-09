import request from 'supertest';
import server from '../index';

describe('Testing auth endpoints', () => {
  describe('/api/auth/login', () => {
    it('should respond with email', (done) => {
      request(server)
        .post('/api/auth/login')
        .send({ email: 'test@gmail.com', password: 'password' })
        .expect(200)
        .end((error, response) => {
          const { email } = response.body;
          expect(email).toBe('test@gmail.com');
          done();
        });
    });
  });
});
