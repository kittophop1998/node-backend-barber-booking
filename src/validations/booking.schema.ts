import Joi from "joi";

export const createBookingSchema = Joi.object({
    customerName: Joi.string().required(),
    age: Joi.string().required(),
    startTime: Joi.string().required(),
});