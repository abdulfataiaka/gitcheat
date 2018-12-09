import mongoose from 'mongoose';

export default new mongoose.Schema({
  _id: Number,
  categoryId: Number,
  type: String,
  title: String,
  content: String,
  keywords: String
}, {
  _id: false
});
