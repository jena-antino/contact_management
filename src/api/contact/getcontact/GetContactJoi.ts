import Joi from "joi";
import ErrorUtility from "../../../domain/constants/message/ErrorUtility";

const GetContactJoi = Joi.object({
  page: Joi.string().required().messages(ErrorUtility.joiHelper("page", "string", false)),
  limit: Joi.string().required().messages(ErrorUtility.joiHelper("limit", "string", false)),
  search: Joi.string().allow("").optional().messages(ErrorUtility.joiHelper("search", "string", false)),
  filterBy: Joi.string()
    .allow("draft", "finalized")
    .optional()
    .messages(ErrorUtility.joiHelper("filterBy", "string", false)),
});

export default GetContactJoi;
