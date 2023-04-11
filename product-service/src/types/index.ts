export interface CreateProductBody {
  title: string;
  description: string;
  price: number;
  img_url: string;
}

export interface CreatedProductData extends CreateProductBody {
  id: string;
}

export interface CreatedStockData {
  id: string;
  count: number;
  product_id: string;
}

export interface ProductData {
  id: string;
  title: string;
  description: string;
  price: number;
  img_url: string;
  count: number;
}
