import Joi from "joi";
import ErrorUtility from "../../../domain/constants/message/ErrorUtility";

const ContactCategoryJoi = Joi.object({
  search: Joi.string().allow("").optional().messages(ErrorUtility.joiHelper("search", "string", false)),
  filterBy: Joi.string()
    .allow("draft", "finalized")
    .optional()
    .messages(ErrorUtility.joiHelper("filterBy", "string", false)),
});

export default ContactCategoryJoi;
