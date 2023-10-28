import { Router } from 'express';
import { ArchivosController } from '../controllers/archivos.js';

export const createArchivosRouter = () => {
    const archivosRouter = Router()

    const archivosController = new ArchivosController()

    archivosRouter.get('/', archivosController.getAllArchivos)
    archivosRouter.get('/:id', archivosController.getArchivo)
    archivosRouter.post('/', archivosController.subirArchivo)

    return archivosRouter;
}
