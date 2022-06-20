import prismaClient from '../../prisma';

interface ProductRequest {
  image: string;
  name: string;
  price: number;
  promotion?: boolean;
  promotion_description?: string;
  promotional_price?: number;
  promotion_days?: string;
  promotion_time?: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    image,
    name,
    price,
    promotion,
    promotion_description,
    promotional_price,
    promotion_days,
    promotion_time,
    category_id,
  }: ProductRequest) {
    if (!name || !image || !price) {
      throw new Error('Please inform all values');
    }

    const result = await prismaClient.product.create({
      data: {
        image,
        name,
        price,
        promotion,
        promotion_description,
        promotional_price,
        promotion_days,
        promotion_time,
        category_id,
      },
    });

    return result;
  }
}

export { CreateProductService };
