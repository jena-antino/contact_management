import { Request, Response } from "express";
import { ObjectSchema } from "joi";
import HttpError from "standard-http-error";
import UseCaseInterface from "./UseCaseInterface";

export default abstract class BaseUseCase implements UseCaseInterface {
  public request: Request;
  public response: Response;
  public tokenPayload;
  protected requestBody: any;
  protected pathParams: any;
  protected queryParams: any;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
    this.tokenPayload = {};
  }

  abstract execute();

  public async executeAndHandleErrors(): Promise<any> {
    try {
      let data: any = await this.execute();
      if (data == null) data = {};

      if (data.error) throw data;

      if (typeof data === "string") data = { message: data };

      const code = data.code ?? 200;

      this.response.status(code).json(data);
    } catch (error) {
      if (error != null) {
        let message = error.message;

        if (error.parent && error.parent.code === "23505") message = "Data already exists";

        const code = error.code ?? 400;

        console.log("----- API Error ----- ", error);

        this.response.status(code >= 100 && code < 600 ? code : 500).json({ code, message });
      } else {
        this.response.status(400).json({
          code: 400,
          message: "Unable to process your request, please try again",
        });
      }
    }
  }
}
