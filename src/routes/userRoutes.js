import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

export default (userService) => {
    const userController = new UserController(userService);

    router.get('/:id', userController.getUserById.bind(userController));
    router.get('/', userController.getAllUsers.bind(userController));
    router.post('/', userController.createUser.bind(userController));
    router.put('/:id', userController.updateUser.bind(userController));
    router.delete('/:id', userController.deleteUser.bind(userController));

    return router;
}; 