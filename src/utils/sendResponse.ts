import { Response } from "express";

export const sendResponse = (
  res: Response,
  message: string,
  data: any,
  statusCode: number = 200
) => {
  res.status(statusCode).send({
    message,
    data,
  });
};
