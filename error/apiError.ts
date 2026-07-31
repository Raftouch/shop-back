import { ApiErrorType } from "../types/error";

export const ApiError = {
  notFound(): ApiErrorType {
    return {
      status: 404,
      message: "Not found",
    };
  },
  badRequest(): ApiErrorType {
    return {
      status: 400,
      message: "Bad request",
    };
  },
  unauthorized(): ApiErrorType {
    return {
      status: 401,
      message: "Unauthorized",
    };
  },
  forbidden(): ApiErrorType {
    return {
      status: 403,
      message: "Forbidden",
    };
  },
};
