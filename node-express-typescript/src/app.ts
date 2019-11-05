import express, { Application, Request, Response, NextFunction } from 'express';
import users from './routes/users';
const app: Application = express();



app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});
app.use('/api/users', users);
app.listen(8000, () => console.log('Server is Up & Running'));
