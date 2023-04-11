import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { prepareResponse } from "@libs/api-gateway";
import { productsDynamoDBController } from "@libs/products-db-controller";
import { RESP_STATUS_CODES } from "@constants";
import { middyfy } from "@libs/lambda";

export const MSG_PRODUCTS_FOUND = 'Products list.';

const getProductsList: ValidatedEventAPIGatewayProxyEvent = async (event) => {
  try {
    console.log('Get products Lambda triggered');

    const resultData = await productsDynamoDBController.getProductsList();

    return prepareResponse(
      {
        message: MSG_PRODUCTS_FOUND,
        data: resultData,
      },
      RESP_STATUS_CODES.OK
    );
  } catch (error) {
    console.error('Get products list request error', error);

    if (error instanceof Error) {
      const { message, stack } = error;
      return prepareResponse({ stack, message }, RESP_STATUS_CODES.INTERNAL_ERROR);
    }

    return prepareResponse(
      { message: 'Internal server error.' },
      RESP_STATUS_CODES.INTERNAL_ERROR
    );
  }
};

export const main = middyfy(getProductsList);
