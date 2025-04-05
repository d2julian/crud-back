import { HotelDTO } from '../models/dto/hotelDTO';
import Hotel from '../models/hotel';

class HotelRepository {
  public findAll = async (): Promise<Hotel[]> => {
    return Hotel.findAll();
  };

  public save = async (hotel: HotelDTO): Promise<Hotel> => {
    return Hotel.create(hotel);
  };

  public update = async (id: number, hotel: HotelDTO): Promise<Hotel | null> => {
    const hotelToUpdate = await Hotel.findByPk(id);
    if (hotelToUpdate) {
      return hotelToUpdate.update(hotel);
    }
    return null;
  };

  public delete = async (id: number): Promise<boolean> => {
    const hotel = await Hotel.findByPk(id);
    if (hotel) {
      await hotel.destroy();
      return true;
    }
    return false;
  };
}

export default HotelRepository;
