// server/src/routes/blog.js
import { Router } from 'express';
import multer from 'multer';
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  togglePublishBlog
} from '../controllers/blogController.js';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';

const router = Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  }
});

const upload = multer({ storage: storage });

// Public routes
router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);

// Admin routes
router.get('/admin/all', auth, admin, getAllBlogs);
router.post('/', auth, admin, upload.single('image'), createBlog);
router.put('/:id', auth, admin, upload.single('image'), updateBlog);
router.delete('/:id', auth, admin, deleteBlog);
router.patch('/:id/toggle-publish', auth, admin, togglePublishBlog);

export default router;
