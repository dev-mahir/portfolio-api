import express from "express";
import {
  register,
  userLogin
} from "../controllers/userController.js";

// init router
const router = express.Router();


// user auth route
router.post("/register", register);
router.post("/login", userLogin);


// export  router
export default router;
