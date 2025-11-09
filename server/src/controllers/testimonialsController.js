// server/src/controllers/testimonialsController.js
import Testimonial from '../models/Testimonial.js';
export async function listTestimonials(req, res) {
  const items = await Testimonial.find().sort({ createdAt: -1 });
  res.json(items);
}



