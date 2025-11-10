import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./src/config/db.js";

import servicesRouter from "./src/routes/services.js";
import testimonialsRouter from "./src/routes/testimonials.js";
import userRoutes from "./src/routes/user.js";
import blogRoutes from "./src/routes/blog.js";
import adminRoutes from "./src/routes/admin.js";
import agreementRoutes from "./src/routes/agreement.js";

dotenv.config();

// Needed for file paths in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect DB once on cold start
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// static uploads if needed
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API Routes
app.use("/api/services", servicesRouter);
app.use("/api/testimonials", testimonialsRouter);
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/agreements", agreementRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("✅ API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
