import Joi from "joi";
import ErrorUtility from "../../../domain/constants/message/ErrorUtility";

const GetContactJoi = Joi.object({
  page: Joi.string().required().messages(ErrorUtility.joiHelper("page", "string", false)),
  limit: Joi.string().required().messages(ErrorUtility.joiHelper("limit", "string", false)),
  search: Joi.string().optional().messages(ErrorUtility.joiHelper("search", "string", false)),
});

export default GetContactJoi;
