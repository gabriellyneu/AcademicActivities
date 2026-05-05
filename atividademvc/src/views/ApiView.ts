import { Response } from "express";

export class ApiView {
  public static success(res: Response, data: unknown, statusCode = 200): void {
    res.status(statusCode).json(data);
  }

  public static error(res: Response, message: string, statusCode = 400): void {
    res.status(statusCode).json({ erro: message });
  }
}