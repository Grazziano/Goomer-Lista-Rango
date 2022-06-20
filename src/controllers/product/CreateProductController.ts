import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';

class CreateProductController {
  async handle(req: Request, res: Response) {
    const {
      image,
      name,
      price,
      promotion,
      promotion_description,
      promotional_price,
      promotion_days,
      promotion_time,
      category_id,
    } = req.body;

    // let image = 'teste';

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      image,
      name,
      price,
      promotion,
      promotion_description,
      promotional_price,
      promotion_days,
      promotion_time,
      category_id,
    });

    return res.status(200).json(product);
  }
}

export { CreateProductController };
