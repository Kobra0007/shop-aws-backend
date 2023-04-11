import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { mockProducts } from '../../mocks/products-data';

const getProductsList: ValidatedEventAPIGatewayProxyEvent = async (event) => {
  
  const products = await new Promise((resolve) => resolve(mockProducts));
  return formatJSONResponse(products);
};

export const main = middyfy(getProductsList);
