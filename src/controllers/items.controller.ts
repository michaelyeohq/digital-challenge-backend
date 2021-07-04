import { NextFunction, Request, Response } from 'express';
import { CreateItemDto } from '@dtos/items.dto';
import { Item } from '@interfaces/items.interface';
import itemService from '@services/items.service';

class ItemsController {
  public itemService = new itemService();

  public getItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllItemsData: Item[] = await this.itemService.findAllItem();

      res.status(200).json({ data: findAllItemsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const itemId = Number(req.params.id);
      const findOneItemData: Item = await this.itemService.findItemById(itemId);

      res.status(200).json({ data: findOneItemData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const itemData: CreateItemDto = req.body;
      const createItemData: Item = await this.itemService.createItem(itemData);

      res.status(201).json({ data: createItemData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const itemId = Number(req.params.id);
      const itemData: CreateItemDto = req.body;
      const updateItemData: Item = await this.itemService.updateItem(itemId, itemData);

      res.status(200).json({ data: updateItemData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const itemId = Number(req.params.id);
      const deleteItemData: Item = await this.itemService.deleteItem(itemId);

      res.status(200).json({ data: deleteItemData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ItemsController;
