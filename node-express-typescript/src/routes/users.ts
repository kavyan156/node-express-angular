import express, { Request, Response, NextFunction } from 'express';
import request from 'request';
const router = express.Router();


router.get('', (req: Request, res: Response, next: NextFunction) => {
  const pageSize = req.query.per_page;
  const currentPage = req.query.page;
  request(`https://reqres.in/api/users?page=${currentPage}&per_page=${pageSize}`, {json: true}, (err: any, body: any) => {
  if (err) { return console.log(err); }
  res.status(200).json(body);
});
});

export = router;
