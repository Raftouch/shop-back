export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }

  static notFound() {
    return new ApiError(404, "Not found");
  }

  static badRequest() {
    return new ApiError(400, "Bad request");
  }

  static unauthorized() {
    return new ApiError(401, "Unauthorized");
  }

  static forbidden() {
    return new ApiError(403, "Forbidden");
  }
}
