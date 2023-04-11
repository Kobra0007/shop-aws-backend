import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { prepareResponse } from "@libs/api-gateway";
import { productsDynamoDBController } from "@libs/products-db-controller";
import { BaseError, NotFoundError } from "@libs/errors";
import { RESP_STATUS_CODES } from "@constants";
import { middyfy } from "@libs/lambda";

export const MSG_PRODUCT_FOUND = "Product found";
export const MSG_PRODUCT_NOT_FOUND = "No product found with such ID";

const getProductById: ValidatedEventAPIGatewayProxyEvent = async (event) => {
  try {
    const params = event.pathParameters;
    console.log("Get product by ID Lambda triggered, params: ", params);

    const productId = params?.productId || "";
    const resultData = await productsDynamoDBController.getProductById(productId);

    if (!resultData) {
      throw new NotFoundError(MSG_PRODUCT_NOT_FOUND);
    }

    return prepareResponse(
      {
        message: MSG_PRODUCT_FOUND,
        data: resultData,
      },
      RESP_STATUS_CODES.OK
    );
  } catch (error) {
    console.error("Get product by ID request error", error);

    if (error instanceof BaseError) {
      const { code, stack, message } = error;
      return prepareResponse({ stack, message }, code);
    } else if (error instanceof Error) {
      const { message, stack } = error;
      return prepareResponse(
        { stack, message },
        RESP_STATUS_CODES.INTERNAL_ERROR
      );
    }

    return prepareResponse(
      { message: "Internal server error." },
      RESP_STATUS_CODES.INTERNAL_ERROR
    );
  }
};

export const main = middyfy(getProductById);
