// import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
// import { formatJSONResponse } from '@libs/api-gateway';
// import { middyfy } from '@libs/lambda';
// import {mockProducts} from '../../mocks/products-data';

// const getProductsList: ValidatedEventAPIGatewayProxyEvent = async (event) => {
//   const products = mockProducts;
//   return formatJSONResponse({
//     message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
//     event,
//   });
// };

// export const main = middyfy(getProductsList);
