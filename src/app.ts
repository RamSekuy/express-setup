/** @format */
import { PORT, corsOption } from "./config/config";
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import anyRouter from "./router/any.router";

export class App {
  private app: Application;
  constructor() {
    this.app = express();

    this.configure();
    this.routes();
    this.errorHandler();
  }

  private routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("welcome to api with prisma API");
    });
    this.app.use("/*", anyRouter.getRouter);
  }
  private errorHandler() {
    this.app.use(
      (error: unknown, req: Request, res: Response, next: NextFunction) => {
        if (error instanceof Error)
          res.status(500).send({
            message: error.message,
          });
      }
    );
  }
  private configure() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors(corsOption));
  }
  public start() {
    this.app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  }
}
