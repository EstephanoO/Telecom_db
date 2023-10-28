import { Router } from 'express';
import { CarpetasController } from '../controllers/carpetas.js';

export const createCarpetasRouter = () => {
    const carpetasRouter = Router()

    const carpetasController = new CarpetasController()

    carpetasRouter.get('/', carpetasController.getAllCarpetas)
    carpetasRouter.get('/:id', carpetasController.getCarpeta)
    carpetasRouter.post('/', carpetasController.crearCarpeta)

    return carpetasRouter;
}
