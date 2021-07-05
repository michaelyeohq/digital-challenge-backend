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
    this.router.get(`${this.path}`, this.itemsController.getItems);
    this.router.get(`${this.path}/:id(\\d+)`, this.itemsController.getItemById);
    this.router.post(`${this.path}`, validationMiddleware(CreateItemDto, 'body'), this.itemsController.createItem);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateItemDto, 'body', true), this.itemsController.updateItem);
    this.router.delete(`${this.path}/:id(\\d+)`, this.itemsController.deleteItem);
  }
}

export default ItemsRoute;
