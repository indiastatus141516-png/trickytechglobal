// server/src/controllers/servicesController.js
import Service from '../models/Service.js';

export async function listServices(req, res) {
  const items = await Service.find().sort({ createdAt: -1 });
  res.json(items);
}
