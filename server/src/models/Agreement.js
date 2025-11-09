import mongoose from 'mongoose';

const agreementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  version: {
    type: String,
    default: '1.0',
  },
}, {
  timestamps: true,
});

const Agreement = mongoose.model('Agreement', agreementSchema);

export default Agreement;
