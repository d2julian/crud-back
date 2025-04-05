import BookingService from '../services/bookingService';
import { Request, Response } from 'express';

class BookingController {
  private readonly bookingService: BookingService;

  constructor(bookingService: BookingService) {
    this.bookingService = bookingService;
  }

  public getBookings = async (req: Request, res: Response) => {
    try {
      const bookings = await this.bookingService.getBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  };

  public saveBooking = async (req: Request, res: Response) => {
    try {
      const bookingToSave = req.body;
      const booking = await this.bookingService.saveBooking(bookingToSave);
      res.json(booking);
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  };

  public updateBooking = async (req: Request, res: Response) => {
    try {
      const bookingId = req.params.id;
      const bookingToUpdate = req.body;
      const booking = await this.bookingService.updateBooking(+bookingId, bookingToUpdate);
      res.json(booking);
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  };

  public deleteBooking = async (req: Request, res: Response) => {
    try {
      const bookingId = req.params.id;
      const deleted = await this.bookingService.deleteBooking(+bookingId);
      if (deleted) {
        res.json();
      } else {
        res.status(404).json({ error: 'Reserva no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  };
}
export default BookingController;
