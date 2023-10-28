import { Router } from 'express';
import { UserController } from '../controllers/users.js'

export const createUsersRouter = () => {
    const usersRouter = Router()

    const userController = new UserController()

    usersRouter.get('/', userController.getAllUsers)
    usersRouter.get('/:id', userController.getUser)
    usersRouter.post('/', userController.createUser)

    return usersRouter;
}