import { productsDynamoDBController } from '@libs/products-db-controller';
import { prepareResponse } from '@libs/api-gateway';
import { BaseError, BadRequestError } from '@libs/errors';
import { isValidCreateProductBody } from '@libs/is-valid-create-product-body';
import { RESP_STATUS_CODES } from '@constants';

export const MSG_PRODUCT_CREATED = 'Created new NFT product.';
export const MSG_INVALID_PRODUCT_DATA = 'Invalid new NFT product data.';


const createProduct = async (event) => {
  try {
    const createProductBody = JSON.parse(event?.body);
    console.log('Create product Lambda triggered, body params: ', createProductBody);

    if (!isValidCreateProductBody(createProductBody)) {
      throw new BadRequestError(MSG_INVALID_PRODUCT_DATA);
    }

    const createdData = await productsDynamoDBController.createProduct(createProductBody);

    return prepareResponse(
      {
        message: MSG_PRODUCT_CREATED,
        data: createdData,
      },
      RESP_STATUS_CODES.CREATED
    );
  } catch (error) {
    console.error('Create product request error', error);

    if (error instanceof BaseError) {
      const { code, stack, message } = error;
      return prepareResponse({ stack, message }, code);
    } else if (error instanceof Error) {
      const { message, stack } = error;
      return prepareResponse({ stack, message }, RESP_STATUS_CODES.INTERNAL_ERROR);
    }

    return prepareResponse(
      { message: 'Internal server error.' },
      RESP_STATUS_CODES.INTERNAL_ERROR
    );
  }
};

export default createProduct;
