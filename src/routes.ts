import { Request, Response, Router } from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
  return res.json({ message: 'Hello World! 😃' });
});

export { router };
