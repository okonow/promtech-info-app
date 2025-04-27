import express from 'express';
import UserController from '../controllers/userController.js';
import UserService from '../services/userService.js';
import UserRepository from '../repositories/userRepository.js';
import User from '../models/user.js';

const router = express.Router();

// Инициализация зависимостей
const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// Роуты
router.get('/', userController.getAllUsers.bind(userController));
router.get('/:id', userController.getUserById.bind(userController));

export default router;
