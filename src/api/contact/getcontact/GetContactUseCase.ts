import { joiObjectEnum } from "../../../domain/enumerations/Enumerations";
import CreateContactRepository from "../../../repositories/CreateContactRepository";
import BaseUseCase from "../../BaseUseCase";
import GetContactJoi from "./GetContactJoi";

export default class GetContactUseCase extends BaseUseCase {
  private createContactRepository: CreateContactRepository;

  constructor(request, response, createContactRepository: CreateContactRepository) {
    super(request, response);
    this.createContactRepository = createContactRepository;
  }

  public async execute() {
    try {
      // this.validate(joiObjectEnum.REQUEST_PARAMS, GetContactJoi);

      const data = await this.createContactRepository.find();

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
    return new GetContactUseCase(request, response, new CreateContactRepository());
  }
}
