import { joiObjectEnum } from "../../../domain/enumerations/Enumerations";
import ContactRepository from "../../../repositories/ContactRepository";
import BaseUseCase from "../../BaseUseCase";
import { UpdateContactJoi, UpdateQueryContactJoi } from "./UpdateContactJoi";
interface UpdateContact {
  name: string;
  email: string;
  phone_number: string;
  tag: string;
  status: string;
}
export default class UpdateContactUseCase extends BaseUseCase {
  protected requestBody: UpdateContact;
  private contactRepository: ContactRepository;

  constructor(request, response, contactRepository: ContactRepository) {
    super(request, response);
    this.contactRepository = contactRepository;
  }

  public async execute() {
    try {
      this.validate(joiObjectEnum.REQUEST_BODY, UpdateContactJoi);
      this.validate(joiObjectEnum.REQUEST_PARAMS, UpdateQueryContactJoi);

      const data = await this.contactRepository.update(this.requestBody, { where: { id: this.pathParams.id } });
      console.log(data);
      return {
        code: 200,
        message: "update Contact data successfully",
      };
    } catch (error) {
      throw error;
    }
  }

  public static create(request, response) {
    return new UpdateContactUseCase(request, response, new ContactRepository());
  }
}
