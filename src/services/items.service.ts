// Database
import DB from '@/databases';
// DTOs
import { CreateItemDto } from '@dtos/items.dto';
// Error Handlers
import HttpException from '@exceptions/HttpException';
// Interfaces
import { Item } from '@interfaces/items.interface';
// Utils
import { isEmpty } from '@utils/util';

class ItemService {
    public items = DB.Items;

    public async findAllItem(): Promise<Item[]> {
        const allItem: Item[] = await this.items.findAll();
        return allItem;
    }

    public async findItemById(itemId: number): Promise<Item> {
        if (isEmpty(itemId)) throw new HttpException(400, "You're not itemId");

        const findItem: Item = await this.items.findByPk(itemId);
        if (!findItem) throw new HttpException(409, "You're not item");

        return findItem;
    }

    public async createItem(itemData: CreateItemDto): Promise<Item> {
        if (isEmpty(itemData)) throw new HttpException(400, "You're not itemData");

        const findItem: Item = await this.items.findOne({ where: { name: itemData.name } });
        if (findItem) throw new HttpException(409, `You're name ${itemData.name} already exists`);

        const createItemData: Item = await this.items.create(itemData);
        return createItemData;
    }

    public async updateItem(itemId: number, itemData: CreateItemDto): Promise<Item> {
        if (isEmpty(itemData)) throw new HttpException(400, "You're not itemData");

        const findItem: Item = await this.items.findByPk(itemId);
        if (!findItem) throw new HttpException(409, "You're not item");

        await this.items.update(itemData, { where: { id: itemId } });

        const updateItem: Item = await this.items.findByPk(itemId);
        return updateItem;
    }

    public async deleteItem(itemId: number): Promise<Item> {
        if (isEmpty(itemId)) throw new HttpException(400, "You're not itemId");

        const findItem: Item = await this.items.findByPk(itemId);
        if (!findItem) throw new HttpException(409, "You're not item");

        await this.items.destroy({ where: { id: itemId } });

        return findItem;
    }
}

export default ItemService;