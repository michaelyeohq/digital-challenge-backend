import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Item } from '@interfaces/items.interface';

export type ItemCreationAttributes = Optional<Item, 'id' | 'name' | 'type' | 'price' | 'stock' | 'manufacturer' | 'description'>;

export class ItemModel extends Model<Item, ItemCreationAttributes> implements Item {
  public id: number;
  public name: string;
  public type: string;
  public price: number;
  public stock: number;
  public manufacturer: string;
  public description: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof ItemModel {
  ItemModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      type: {
        allowNull: true,
        type: DataTypes.STRING(45),
      },
      price: {
        allowNull: true,
        type: DataTypes.DECIMAL(10, 2),
      },
      stock: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      manufacturer: {
        allowNull: true,
        type: DataTypes.STRING(45),
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'items',
      sequelize,
    },
  );

  return ItemModel;
}
