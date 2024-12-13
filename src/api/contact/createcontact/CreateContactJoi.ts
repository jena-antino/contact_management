import Joi from "joi";
import ErrorUtility from "../../../domain/constants/message/ErrorUtility";

const CreateContactJoi = Joi.object({
  name: Joi.string().required().messages(ErrorUtility.joiHelper("name", "string", false)),
  email: Joi.string().email().required().messages(ErrorUtility.joiHelper("email", "string", false)),
  phone_number: Joi.string().required().messages(ErrorUtility.joiHelper("phone_number", "string", false)),
  status: Joi.string()
    .valid("draft", "finalized")
    .required()
    .messages(ErrorUtility.joiHelper("status", "string", false)),
  tag: Joi.string().optional().messages(ErrorUtility.joiHelper("tag", "string", true)),
});

export default CreateContactJoi;
