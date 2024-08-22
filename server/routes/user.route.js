import express from "express";
import sendMessage from "../controllers/user.contoller.js";

const router = express.Router();

router.post("/send-message", sendMessage);

export default router;
