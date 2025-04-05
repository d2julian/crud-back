import express from 'express';
import BookingController from '../controllers/bookingController';
import BookingRepository from '../repositories/bookingRepository';
import BookingService from '../services/bookingService';
import { bookingValidator, handleValidationErrors } from '../controllers/validators';

const router = express.Router();
const bookingRepository = new BookingRepository();
const bookingService = new BookingService(bookingRepository);
const bookingController = new BookingController(bookingService);

router.get('/', bookingController.getBookings);
router.post('/', bookingValidator, handleValidationErrors, bookingController.saveBooking);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

export default router;
