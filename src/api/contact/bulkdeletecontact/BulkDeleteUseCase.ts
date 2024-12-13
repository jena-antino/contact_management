import { joiObjectEnum } from "../../../domain/enumerations/Enumerations";
import UserRepository from "../../../repositories/UserRepository";
import BaseUseCase from "../../BaseUseCase";
import UserJoi from "../../user/UserJoi";

export default class BulkDeleteUseCase extends BaseUseCase {
  protected requestBody: any;
  private userRepository: UserRepository;

  constructor(request, response, userRepository: UserRepository) {
    super(request, response);
    this.userRepository = userRepository;
  }

  public async execute() {
    try {
      // const data = this.userRepository.findOne({ id: 7 });

      this.validate(joiObjectEnum.REQUEST_BODY, UserJoi);

      return {
        code: 200,
        message: "user data successfully fetch",
      };
    } catch (error) {
      throw error;
    }
  }

  public static create(request, response) {
    return new BulkDeleteUseCase(request, response, new UserRepository());
  }
}
