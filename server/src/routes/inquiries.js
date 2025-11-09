// server/src/routes/inquiries.js
import { Router } from 'express';
import { createInquiry } from '../controllers/inquiriesController.js';
const router = Router();
router.post('/', createInquiry);
export default router;