import Joi from "joi";
import ErrorUtility from "../../../domain/constants/message/ErrorUtility";

const SearchContactJoi = Joi.object({
  query: Joi.string().required().messages(ErrorUtility.joiHelper("query", "string", false)),
});

export default SearchContactJoi;
