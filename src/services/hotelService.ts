import { HotelDTO } from '../models/dto/hotelDTO';
import Hotel from '../models/hotel';
import HotelRepository from '../repositories/hotelRepository';

class HotelService {
  private readonly hotelRepository: HotelRepository;

  constructor(hotelRepository: HotelRepository) {
    this.hotelRepository = hotelRepository;
  }

  public getHotels = async (): Promise<Hotel[]> => {
    return this.hotelRepository.findAll();
  };

  public saveHotel = async (hotel: HotelDTO): Promise<Hotel> => {
    return this.hotelRepository.save(hotel);
  };

  public updateHotel = async (id: number, hotel: HotelDTO): Promise<Hotel | null> => {
    return this.hotelRepository.update(id, hotel);
  };

  public deleteHotel = async (id: number): Promise<boolean> => {
    return this.hotelRepository.delete(id);
  };
}

export default HotelService;
