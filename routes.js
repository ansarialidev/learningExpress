import express from "express";
import { userLogin, userSignup } from "./controller.js";

export const router = express.Router();

router.get("/login", userLogin);
router.get("/signup", userSignup);
