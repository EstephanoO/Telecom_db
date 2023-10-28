import { Router } from 'express';
import { RoleController } from '../controllers/roles.js'

export const createRolesRouter = () => {
    const rolesRouter = Router()

    const roleController = new RoleController()

    rolesRouter.get('/', roleController.getAllRoles)
    rolesRouter.get('/:id', roleController.getRol)
    rolesRouter.post('/', roleController.crearRol)
    rolesRouter.delete('/:id', roleController.deleteRol)

    return rolesRouter;
}