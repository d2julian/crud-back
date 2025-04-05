import { Request, Response } from 'express';
import HotelService from '../services/hotelService';

class HotelController {
  private readonly hotelService: HotelService;

  constructor(hotelService: HotelService) {
    this.hotelService = hotelService;
  }

  public getHotels = async (req: Request, res: Response) => {
    try {
      const hotels = await this.hotelService.getHotels();
      res.json(hotels);
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  };

  public saveHotel = async (req: Request, res: Response) => {
    try {
      const hotelToSave = req.body;
      const hotel = await this.hotelService.saveHotel(hotelToSave);
      res.json(hotel);
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  };

  public updateHotel = async (req: Request, res: Response) => {
    try {
      const hotelId = req.params.id;
      const hotelToUpdate = req.body;
      const hotel = await this.hotelService.updateHotel(+hotelId, hotelToUpdate);
      if (hotel) {
        res.json(hotel);
      } else {
        res.status(404).json({ error: 'Hotel no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  };

  public deleteHotel = async (req: Request, res: Response) => {
    try {
      const hotelId = req.params.id;
      const deleted = await this.hotelService.deleteHotel(+hotelId);
      if (deleted) {
        res.json();
      } else {
        res.status(404).json({ error: 'Hotel no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  };
}

export default HotelController;
