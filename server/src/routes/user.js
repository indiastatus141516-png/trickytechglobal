
import express from 'express';
const router = express.Router();
import { register, login, updateProfile, signAgreement } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', register);

// @route   POST api/users/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', login);

// @route   PUT api/users/profile/update
// @desc    Update user profile
// @access  Private
router.put('/profile/update', auth, updateProfile);

// @route   POST api/users/agreement/sign
// @desc    Sign agreement
// @access  Private
router.post('/agreement/sign', auth, signAgreement);

export default router;
