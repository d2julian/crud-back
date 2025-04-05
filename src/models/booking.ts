import { Model, DataTypes } from 'Sequelize';
import sequelize from '../database';
import Hotel from '../models/hotel';
import Client from '../models/client';

class Booking extends Model {
  public id: number;
  public hotelId: number;
  public clientId: number;
  public name: string;
  public address: string;
  public Hotel: Hotel;
  public Client: Client;
  public createdAt: string;
  public updatedAt: string;
}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hotelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'bookings',
    timestamps: true,
  },
);

Booking.belongsTo(Hotel, { foreignKey: 'hotelId' });
Booking.belongsTo(Client, { foreignKey: 'clientId' });

Hotel.hasMany(Booking, { foreignKey: 'hotelId' });
Client.hasMany(Booking, { foreignKey: 'clientId' });

export default Booking;
