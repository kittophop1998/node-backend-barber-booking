import { Request, Response } from "express";

class BookingController {
    createBooking = (req: Request, res: Response) => {
        // Logic to create a booking
        res.status(201).json({
            message: "Booking created successfully",
            bookingDetails: req.body,
        });
    }
}

export default new BookingController();