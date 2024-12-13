import { Request, Response } from "express";
import { ObjectSchema } from "joi";
import HttpError from "standard-http-error";
import UseCaseInterface from "./UseCaseInterface";
import Utility from "../domain/service/utility";
import { joiObjectEnum } from "../domain/enumerations/Enumerations";

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
  validate(requestType?: string, joiFunction: ObjectSchema<any> = undefined) {
    this.requestBody = Utility.trimInputs(this.request.body);
    this.pathParams = this.request.params;
    this.queryParams = this.request.query;
    let validateReqObj;

    if (requestType === joiObjectEnum.REQUEST_BODY) {
      validateReqObj = this.requestBody;
    } else if (requestType === joiObjectEnum.REQUEST_PARAMS) {
      validateReqObj = this.pathParams;
    } else if (requestType === joiObjectEnum.REQUEST_QUERY) {
      validateReqObj = this.queryParams;
    }
    if (validateReqObj) joiFunction && this.joiValidationUtil(joiFunction, validateReqObj);
  }

  public joiValidationUtil(joiSchema: any, requestData: any) {
    try {
      const options = {
        allowUnknown: true,
      };

      const { error } = joiSchema.validate(requestData, options);
      if (error) {
        throw new HttpError(400, error.details[0].message.replace(/["]/gi, ""));
      }
    } catch (error) {
      console.log("error joi ======>", error);
      throw error;
    }
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
