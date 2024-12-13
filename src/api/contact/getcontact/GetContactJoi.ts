import Joi from "joi";
import ErrorUtility from "../../../domain/constants/message/ErrorUtility";

const GetContactJoi = Joi.object({
  id: Joi.string().required().messages(ErrorUtility.joiHelper("id", "string", false)),
});

export default GetContactJoi;
