import { Router, Request, Response } from 'express';
import { User } from '../models/user';

const usersRouter = Router();
let users: User[] = [];


usersRouter.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
});

//create
// router.post('/', (req: Request, res: Response) => {
//     const user: User = {
//       id: users.length + 1,
//       last_name: req.body.last_name,
//       first_name: req.body.first_name,
//       email: req.body.email,
//       password: req.body.password,
//       phone_number: req.body.phone_number,
//       position: req.body.position,
//       company_department_id: req.body.company_department_id,
//       role: req.body.role,
//     };
  
//     users.push(user);
//     res.status(201).json(user);
//   });

//get
usersRouter.get('/', (req: Request, res: Response) => {
res.json(users);
});

//update
usersRouter.put('/:id', (req: Request, res: Response) => {
    const task = users.find((t) => t.id === parseInt(req.params.id));
  
    if (!task) {
      res.status(404).send('Task not found');
    } else {
      task.title = req.body.title || task.title;
      task.description = req.body.description || task.description;
      task.completed = req.body.completed || task.completed;
  
      res.json(task);
    }
  });

//delete
usersRouter.delete('/:id', (req: Request, res: Response) => {
const index = users.findIndex((t) => t.id === parseInt(req.params.id));

if (index === -1) {
    res.status(404).send('Task not found');
} else {
    users.splice(index, 1);
    res.status(204).send();
}
});

export default router;