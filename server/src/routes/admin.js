import { Router } from 'express';
import {
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
  adminLogin,
  getAdminProfile
} from '../controllers/adminController.js';
import {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  togglePublishBlog
} from '../controllers/blogController.js';
import {
  getAllAgreements,
  createAgreement,
  updateAgreement,
  deleteAgreement,
  toggleAgreementStatus
} from '../controllers/agreementController.js';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';
import multer from 'multer';

const router = Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Public route for admin login
router.post('/login', adminLogin);

// All other routes require authentication and admin privileges
router.use(auth);
router.use(admin);

router.get('/me', getAdminProfile);
router.get('/users', getAllUsers);
router.get('/users/:userId', getUserById);
router.put('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);

// Blog management routes
router.get('/blogs', getAllBlogs);
router.post('/blogs', upload.single('image'), createBlog);
router.put('/blogs/:id', upload.single('image'), updateBlog);
router.delete('/blogs/:id', deleteBlog);
router.patch('/blogs/:id/toggle-publish', togglePublishBlog);

// Agreement management routes
router.get('/agreements', getAllAgreements);
router.post('/agreements', upload.single('file'), createAgreement);
router.put('/agreements/:id', upload.single('file'), updateAgreement);
router.delete('/agreements/:id', deleteAgreement);
router.patch('/agreements/:id/toggle-status', toggleAgreementStatus);

export default router;
