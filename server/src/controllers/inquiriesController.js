// server/src/controllers/inquiriesController.js
import Inquiry from '../models/Inquiry.js';
export async function createInquiry(req, res) {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: 'All fields required' });
  const doc = await Inquiry.create({ name, email, message });
  res.status(201).json({ message: 'Inquiry received', data: { id: doc._id } });
}