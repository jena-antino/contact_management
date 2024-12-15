import { joiObjectEnum } from "../../../domain/enumerations/Enumerations";
import ContactRepository from "../../../repositories/ContactRepository";
import BaseUseCase from "../../BaseUseCase";
import DeleteContactJoi from "./DeleteContactJoi";

export default class DeleteUseCase extends BaseUseCase {
  private contactRepository: ContactRepository;

  constructor(request, response, contactRepository: ContactRepository) {
    super(request, response);
    this.contactRepository = contactRepository;
  }
  public async execute() {
    try {
      this.validate(joiObjectEnum.REQUEST_PARAMS, DeleteContactJoi);
      const data = await this.contactRepository.softDelete({ where: { id: this.pathParams.id } });
      console.log("data", data);
      return {
        code: 200,
        message: "user deleted successfully",
      };
    } catch (error) {
      throw error;
    }
  }

  public static create(request, response) {
    return new DeleteUseCase(request, response, new ContactRepository());
  }
}
