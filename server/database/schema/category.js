import mongoose from 'mongoose';

export default new mongoose.Schema({
  _id: Number,
  name: String
}, {
  _id: false
});
