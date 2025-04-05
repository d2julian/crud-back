import { BookingDTO } from 'src/models/dto/bookingDTO';
import Booking from '../models/booking';
import Hotel from '../models/hotel';
import Client from '../models/client';

class BookingRepository {
  public findAll = async (): Promise<Booking[]> => {
    return Booking.findAll({
      include: [
        { model: Hotel, attributes: ['name'] },
        { model: Client, attributes: ['name'] },
      ],
    });
  };

  public create = async (booking: BookingDTO): Promise<Booking> => {
    return Booking.create(booking);
  };

  public update = async (id: number, booking: BookingDTO): Promise<Booking> | null => {
    const bookingToUpdate = await Booking.findByPk(id);
    if (bookingToUpdate) {
      return await bookingToUpdate.update(booking);
    }
    return null;
  };

  public delete = async (id: number): Promise<boolean> => {
    const booking = await Booking.findByPk(id);
    if (booking) {
      booking.destroy();
      return true;
    }
    return false;
  };
}

export default BookingRepository;
