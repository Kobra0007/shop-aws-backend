import {
  type ProductData,
  type CreateProductBody,
  type CreatedProductData,
  type CreatedStockData,
} from '@types';

export interface IProductsDBController {
  getProductsList: () => Promise<ProductData[]>;
  getProductById: (id: string) => Promise<ProductData | null>;
  createProduct: (createProductBody: CreateProductBody) => Promise<{
    product: CreatedProductData;
    stock: CreatedStockData;
  }>;
}

export { default as productsDynamoDBController } from './products-dynamoDB-controller';;
