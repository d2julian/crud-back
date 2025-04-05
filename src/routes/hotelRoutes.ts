import express from 'express';
import HotelController from '../controllers/hotelController';
import HotelRepository from '../repositories/hotelRepository';
import HotelService from '../services/hotelService';
import { hotelValidator, handleValidationErrors } from '../controllers/validators';

const router = express.Router();
const hotelRepository = new HotelRepository();
const hotelService = new HotelService(hotelRepository);
const hotelController = new HotelController(hotelService);

router.get('/', hotelController.getHotels);
router.post('/', hotelValidator, handleValidationErrors, hotelController.saveHotel);
router.put('/:id', hotelController.updateHotel);
router.delete('/:id', hotelController.deleteHotel);

export default router;
