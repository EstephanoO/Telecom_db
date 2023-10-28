import { Router } from 'express';
import { FormularioController } from '../controllers/formularios.js';

export const createFormulariosRouter = () => {
    const formulariosRouter = Router()

    const formularioController = new FormularioController()

    formulariosRouter.get('/', formularioController.getAllFormularios)
    formulariosRouter.get('/:id', formularioController.getFormulario)
    formulariosRouter.post('/', formularioController.createFormulario)
    formulariosRouter.delete('/:id', formularioController.deleteFormulario)

    return formulariosRouter;
}