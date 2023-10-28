import { Router } from 'express';
import { ItemsController } from '../controllers/items.js';

export const createItemsRouter = () => {
    const itemsRouter = Router()

    const itemsController = new ItemsController()

    itemsRouter.get('/', itemsController.getAllItems)

    return itemsRouter;
}