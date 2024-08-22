import { ObjectSchema } from "joi";

interface UseCaseInterface {
  // validate(type: string, joiFunction: ObjectSchema<any>);

  execute();

  executeAndHandleErrors();
}

export default UseCaseInterface;
