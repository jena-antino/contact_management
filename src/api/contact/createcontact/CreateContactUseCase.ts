import { joiObjectEnum } from "../../../domain/enumerations/Enumerations";
import ContactRepository from "../../../repositories/ContactRepository";
import BaseUseCase from "../../BaseUseCase";
import CreateContactJoi from "./CreateContactJoi";

export default class CreateContactUseCase extends BaseUseCase {
  protected requestBody: {
    name: string;
    email: string;
    phone_number: string;
    tag: string;
    status: string;
  };

  private contactRepository: ContactRepository;

  constructor(request, response, contactRepository: ContactRepository) {
    super(request, response);
    this.contactRepository = contactRepository;
  }

  public async execute() {
    try {
      this.validate(joiObjectEnum.REQUEST_BODY, CreateContactJoi);

      const data = await this.contactRepository.create(this.requestBody);

      return {
        code: 200,
        message: "contact create successfully",
        data,
      };
    } catch (error) {
      throw error;
    }
  }

  public static create(request, response) {
    return new CreateContactUseCase(request, response, new ContactRepository());
  }
}
