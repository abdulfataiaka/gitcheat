import mongoose from 'mongoose';

export default new mongoose.Schema({
  _id: Number,
  email: String,
  password: String
}, {
  _id: false
});
