import { joiObjectEnum } from "../../../domain/enumerations/Enumerations";
import ContactRepository from "../../../repositories/ContactRepository";
import BaseUseCase from "../../BaseUseCase";
import GetContactJoi from "./GetContactJoi";

export default class GetContactUseCase extends BaseUseCase {
  private contactRepository: ContactRepository;

  constructor(request, response, contactRepository: ContactRepository) {
    super(request, response);
    this.contactRepository = contactRepository;
  }

  public async execute() {
    try {
      // this.validate(joiObjectEnum.REQUEST_PARAMS, GetContactJoi);

      const data = await this.contactRepository.find();

      return {
        code: 200,
        message: "user data successfully fetch",
        data,
      };
    } catch (error) {
      throw error;
    }
  }

  public static create(request, response) {
    return new GetContactUseCase(request, response, new ContactRepository());
  }
}
