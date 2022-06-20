import { Router } from 'express';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';

const router = Router();

// ROTAS CATEGORY
router.post('/category', new CreateCategoryController().handle);

// ROTAS PRODUCT
router.post('/product', new CreateProductController().handle);

export { router };
