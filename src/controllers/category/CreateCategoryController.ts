import { Request, Response } from 'express';
import { CreateCategoryService } from '../../services/category/CreateCategoryService';

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createCategory = new CreateCategoryService();

    const result = await createCategory.execute({ name });

    return res.status(200).json(result);
  }
}

export { CreateCategoryController };
