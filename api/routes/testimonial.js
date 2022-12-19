import express from "express";
import { addTestmonial, deleteTestmonial, getAllTestmonial, getSingleTestmonial, updateTestmonial } from "../controllers/testimonialController.js";
import { multerPhotoUpload } from "../utility/fileUpload.js";

// init router
const router = express.Router();

// user auth route
router.get("/", getAllTestmonial);

router.post("/", multerPhotoUpload, addTestmonial);

router.patch("/:id", updateTestmonial);
router.delete("/:id", deleteTestmonial);
router.get("/:id", getSingleTestmonial);

// export  router
export default router;
