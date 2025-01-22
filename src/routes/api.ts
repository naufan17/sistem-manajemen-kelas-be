import express, { Router, Request, Response } from 'express';
import { handleInternalServerError, handleNotFound, handleOk } from '../helpers/responseHelper';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return handleOk(res, 'Welcome to Sistem Manajemen Kelas API');
});

router.use((req: Request, res: Response) => {
  return handleNotFound(res, 'Route not found');
})

router.use((err: unknown, req: Request, res: Response) => {
  return handleInternalServerError(res, "Internal Server Error");
})