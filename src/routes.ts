import { Request, Response, Router } from 'express';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';

const router = Router();

router.post('/category', new CreateCategoryController().handle);

export { router };
