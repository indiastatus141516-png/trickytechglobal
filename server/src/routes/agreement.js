import { Router } from 'express';
import multer from 'multer';
import {
  getActiveAgreement,
  createAgreement,
  updateAgreement,
  deleteAgreement,
  getAllAgreements,
  toggleAgreementStatus
} from '../controllers/agreementController.js';
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
router.get('/active', getActiveAgreement);

// Admin routes
router.get('/admin/all', auth, admin, getAllAgreements);
router.post('/', auth, admin, upload.single('file'), createAgreement);
router.put('/:id', auth, admin, upload.single('file'), updateAgreement);
router.delete('/:id', auth, admin, deleteAgreement);
router.patch('/:id/toggle-status', auth, admin, toggleAgreementStatus);

export default router;
