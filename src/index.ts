import express, { Request, Response } from 'express';
import usersRouter from './routes/user'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });

app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});

app.use('/users', usersRouter);
