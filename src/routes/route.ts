import { Router } from "express";
import bookingRouter from "./booking.route";

const router = Router();
router.use('/booking', bookingRouter);

export default router;