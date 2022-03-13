import express from "express";
import { exportUser } from "../controllers/User.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("JSR")
})

router.get('/downloadexcel', exportUser)

export default router;