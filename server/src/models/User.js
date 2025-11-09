import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  school: { type: String, required: true },
  universityCityZip: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isFirstLogin: {
    type: Boolean,
    default: true,
  },
  isProfileCompleted: {
    type: Boolean,
    default: false,
  },
  isAgreementSigned: {
    type: Boolean,
    default: false,
  },
  agreementSignedDate: {
    type: Date,
  },
  profileData: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
