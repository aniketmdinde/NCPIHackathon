import { Router } from "express";
import { getUserProfile, helloWorld } from "../controllers/user.controller.js";
import requireAuth from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/profile", requireAuth, getUserProfile);

router.get("/hello", helloWorld);

export default router;