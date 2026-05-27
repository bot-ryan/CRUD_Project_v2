import { Router } from "express";
import * as clientController from "../controllers/clientController.js";

const router = Router(); // ← just Router(), not express.Router()

router.get("/clients", clientController.getClients);
router.post("/clients", clientController.createClient);

export default router;