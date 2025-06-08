import { Router } from "express";
import bookingController from "../controllers/booking.controller";
import { createBookingSchema } from "../validations/booking.schema";
import { validate } from "../middlewares/validate";
import Joi from "joi";

const bookingRouter: Router = Router();

bookingRouter.post("/create", validate(createBookingSchema), bookingController.createBooking);

export default bookingRouter;