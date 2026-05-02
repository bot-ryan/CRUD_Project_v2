import { Router } from "express";
import { sayHello } from "../controllers/clientController.js";

const router = Router();

router.get("/", sayHello);

export default router;
