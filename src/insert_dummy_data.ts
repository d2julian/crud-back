import Hotel from './models/hotel';
import Client from './models/client';
import Booking from './models/booking';
import { Sequelize } from 'Sequelize';

const insertDummyData = async (sequelize: Sequelize) => {
  await sequelize.sync({ force: true });
  await Hotel.bulkCreate([
    { name: 'Hotel 1', address: 'Calle de hotel 1' },
    { name: 'Hotel 2', address: 'Calle de hotel 2' },
  ]);
  await Client.bulkCreate([
    { name: 'Cliente 1', address: 'Calle de Cliente 1', phone: '12345' },
    { name: 'Cliente 2', address: 'Calle de Cliente 2', phone: '32435' },
  ]);
  await Booking.bulkCreate([
    { hotelId: 1, clientId: 1, name: 'James', address: 'Direccion 1' },
    { hotelId: 1, clientId: 2, name: 'Lars', address: 'Direccion 2' },
    { hotelId: 2, clientId: 1, name: 'Kirk ', address: 'Direccion 3' },
    { hotelId: 2, clientId: 2, name: 'Robert ', address: 'Direccion 4' },
  ]);
};

export default insertDummyData;
