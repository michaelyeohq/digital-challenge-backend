import { Router } from 'express';
import ItemsController from '@controllers/items.controller';
import { CreateItemDto } from '@dtos/items.dto';
import Route from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';

class ItemsRoute implements Route {
  public path = '/items';
  public router = Router();
  public itemsController = new ItemsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.itemsController.getItems);
    this.router.get(`${this.path}/:id(\\d+)`, authMiddleware, this.itemsController.getItemById);
    this.router.post(`${this.path}`, authMiddleware, validationMiddleware(CreateItemDto, 'body'), this.itemsController.createItem);
    this.router.put(`${this.path}/:id(\\d+)`, authMiddleware, validationMiddleware(CreateItemDto, 'body', true), this.itemsController.updateItem);
    this.router.delete(`${this.path}/:id(\\d+)`, authMiddleware, this.itemsController.deleteItem);
  }
}

export default ItemsRoute;
