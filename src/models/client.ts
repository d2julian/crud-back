import { Model, DataTypes } from 'Sequelize';
import sequelize from '../database';

class Client extends Model {
  public id: number;
  public name: string;
  public address: string;
  public phone: string;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'clients',
    timestamps: true,
  },
);

export default Client;
