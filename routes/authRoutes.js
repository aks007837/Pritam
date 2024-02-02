import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import testimonialRoutes from "./testimonialRoutes.js";
import {
  createTestimonial,
  delHandler,
} from "../controllers/contentController.js";
import { getAllTestimonials } from "../controllers/contentController.js";
// import multer from "multer";
import usermodel from "../models/usermodel.js";
import testimonialModel from "../models/testimonialModel.js";
import { updateTestimonials } from "../controllers/contentController.js";

//router object

const router = express.Router();
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

//routing
//REGISTER || METHOD POST

router.post("/register-admin", registerController);

//Login || METHOD POST
router.post("/login-admin", loginController);

router.get("/loggedin-admin/admin-panel/testimonials", getAllTestimonials);

// router.post(
//   "/loggedin-admin/admin-panel/testimonials",
//   upload.single("video"),
//   createTestimonial
// );
router.post("/loggedin-admin/admin-panel/testimonials", createTestimonial);

router.post(
  "/loggedin-admin/admin-panel/update-testimonials",
  updateTestimonials
);

router.post("/loggedin-admin/admin-panel/del-testimonials", delHandler);

router.get("/users/getall", async (req, res) => {
  try {
    const all_data = await usermodel.find();
    // console.log(all_data);
    res.json(all_data);
  } catch (error) {
    console.log(`Error in getting data ${error}`);
  }
});
router.post(
  "/loggedin-admin/admin-panel/find-testimonials",
  async (req, res) => {
    try {
      let custid = req.body.custid; // Assuming the custid is sent in the request body
      custid = parseInt(custid, 10);

      console.log(req.body);

      if (isNaN(custid)) {
        return res.status(200).json({ message: "Invalid custid provided" });
      }

      const findid = await testimonialModel.findOne({ custid });

      if (findid) {
        // return res.json({ data: findid, message: "Data found successfully" });
        return res.json(findid);
      }

      return res.status(202).json({ message: "Testimonial not found" });
    } catch (err) {
      console.log(`Error: ${err}`);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export default router;
