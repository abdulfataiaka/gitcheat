import Auth from '../database/models/auth';

class AuthController {
  static login(request, response) {
    let { email, password } = request.body;
    if (email && email.trim().length && password && password.trim().length) {
      email = email.trim();
      password = password.trim();

      Auth.findOne({ email, password }, (error, user) => {
        if (error) {
          return response.status(500).json({
            message: 'Database error occured',
            error
          });
        }

        if (!user) {
          return response.status(401).json({
            message: 'Login credential incorrect',
          });
        }

        response.status(200).json({
          message: 'Login successful',
          email
        });
      });
    } else {
      response.status(400).json({
        message: 'Invalid email or password provided'
      });
    }
  }
}

export default AuthController;
