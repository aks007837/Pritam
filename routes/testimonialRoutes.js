// testimonialRoutes.js
import express from "express";
import { createTestimonial } from "../controllers/contentController.js";
import multer from "multer";

const router = express.Router();
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// Route for handling testimonial form submission
// router.post("/", upload.single("video"), createTestimonial);
router.post("/", createTestimonial);

export default router;
