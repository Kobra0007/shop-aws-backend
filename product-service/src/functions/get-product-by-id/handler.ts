import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { mockProducts } from '../../mocks/products-data';


const getProductById: ValidatedEventAPIGatewayProxyEvent = async (event) => {
  const { productId } = event.pathParameters || {}
  const product = mockProducts.find(elem => elem.id === productId)
  return formatJSONResponse({ products: [product] });
};

export const main = middyfy(getProductById);
