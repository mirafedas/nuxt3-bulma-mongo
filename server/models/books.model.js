import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  picUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  preorders: {
    type: Number,
    required: true,
  },
}, { 
  timestamps: true, 
},)

export default mongoose.model('Book', schema);
