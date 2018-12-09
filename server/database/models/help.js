import mongoose from 'mongoose';
import HelpSchema from '../schema/help';

const Help = mongoose.model('Help', HelpSchema, 'helps');

export default Help;
