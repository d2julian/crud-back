import { Model, DataTypes } from 'Sequelize';
import sequelize from '../database';

class Hotel extends Model {
  public id: number;
  public name: string;
  public address: string;
}

Hotel.init(
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
  },
  {
    sequelize,
    tableName: 'hotels',
    timestamps: true,
  },
);

export default Hotel;
