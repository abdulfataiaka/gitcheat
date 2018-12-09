import mongoose from 'mongoose';
import schema from '../schema/category';

const Category = mongoose.model('Category', schema, 'categories');

export default Category;
