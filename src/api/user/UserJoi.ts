import Joi from "joi";
import ErrorUtility from "../../domain/constants/message/ErrorUtility";

const UserJoi = Joi.object({
  email: Joi.number().required().messages(ErrorUtility.joiHelper("email", "number", false)),
  password: Joi.number().required().messages(ErrorUtility.joiHelper("password", "number", false)),
});

export default UserJoi;