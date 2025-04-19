import { Request, Response, NextFunction, RequestHandler } from 'express';
import User from '../models/user';
import Company from '../models/companies';
import Department from '../models/departments';
import Position from '../models/positions';

class UserController {
  // Get all users
  getAllUsers: RequestHandler = async (req, res, next) => {
    try {
      const users = await User.findAll({
        include: [
          { model: Company },
          { model: Department },
          { model: Position }
        ]
      });
      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  // Get user by ID
  getUserById: RequestHandler = async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id, {
        include: [
          { model: Company },
          { model: Department },
          { model: Position }
        ]
      });

      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  // Create new user
  createUser: RequestHandler = async (req, res, next) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  // Update user
  updateUser: RequestHandler = async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      await user.update(req.body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  // Delete user
  deleteUser: RequestHandler = async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      await user.destroy();
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController(); 