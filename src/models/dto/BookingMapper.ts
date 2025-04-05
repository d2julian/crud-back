import Booking from '../booking';
import { BookingDTO } from './bookingDTO';
export class BookingMapper {
  static toDTO(bookings: Booking[]): BookingDTO[] {
    return bookings.map(b => ({
      id: b.id,
      hotelId: b.hotelId,
      hotelName: b.Hotel.name,
      clientId: b.clientId,
      clientName: b.Client.name,
      name: b.name,
      address: b.address,
      createdAt: b.createdAt,
      updatedAt: b.updatedAt,
    }));
  }
}
