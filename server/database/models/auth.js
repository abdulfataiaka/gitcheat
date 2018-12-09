import mongoose from 'mongoose';
import schema from '../schema/auth';

// ++ Model name, schema and collection name
const Auth = mongoose.model('Auth', schema, 'auths');

export default Auth;
