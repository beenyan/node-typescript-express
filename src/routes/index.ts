import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api', (req: Request, res: Response) => {
  return res.json({
    name: 'typeScript express',
    version: '4.0.1',
  });
});

export default router;
