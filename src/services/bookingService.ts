import Booking from '../models/booking';
import { BookingDTO } from '../models/dto/bookingDTO';
import { BookingMapper } from '../models/dto/BookingMapper';
import BookingRepository from '../repositories/bookingRepository';

class BookingService {
  private readonly bookingRepository: BookingRepository;

  constructor(bookingRepository: BookingRepository) {
    this.bookingRepository = bookingRepository;
  }

  public getBookings = async (): Promise<BookingDTO[]> => {
    const bookings = await this.bookingRepository.findAll();
    return BookingMapper.toDTO(bookings);
  };

  public saveBooking = async (booking: BookingDTO): Promise<Booking> => {
    return this.bookingRepository.create(booking);
  };

  public updateBooking = async (id: number, booking: BookingDTO): Promise<Booking> => {
    return this.bookingRepository.update(id, booking);
  };

  public deleteBooking = async (id: number): Promise<boolean> => {
    return this.bookingRepository.delete(id);
  };
}

export default BookingService;
