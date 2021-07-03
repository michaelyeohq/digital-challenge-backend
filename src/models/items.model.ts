import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Item } from '@interfaces/items.interface';

export type ItemCreationAttributes = Optional<Item, 'id' | 'name' | 'price' | 'stock'>;

export class ItemModel extends Model<Item, ItemCreationAttributes> implements Item {
  public id: number;
  public name: string;
  public price: number;
  public stock: number;

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
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10,2),
      },
      stock: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'items',
      sequelize,
    },
  );

  return ItemModel;
}
