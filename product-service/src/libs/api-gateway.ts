import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda"
import type { FromSchema } from "json-schema-to-ts";
import { RESP_STATUS_CODES } from '@constants';

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

export const prepareResponse = (
  response: Record<string, unknown>,
  statusCode: number = RESP_STATUS_CODES.OK
) => {
  return {
    statusCode,
    body: JSON.stringify(response),
  };
};
