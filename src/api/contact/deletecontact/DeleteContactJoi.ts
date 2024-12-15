import Joi from "joi";
import ErrorUtility from "../../../domain/constants/message/ErrorUtility";

const DeleteContactJoi = Joi.object({
  id: Joi.string().required().messages(ErrorUtility.joiHelper("id", "string", false)),
});

export default DeleteContactJoi;
