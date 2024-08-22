import UserRepository from "../../repositories/UserRepository";
import BaseUseCase from "../BaseUseCase";

export default class UserUseCase extends BaseUseCase {
  protected requestBody: any;
  private userRepository: UserRepository;

  constructor(request, response, userRepository: UserRepository) {
    super(request, response);
    this.userRepository = userRepository;
  }

  public async execute() {
    try {
      // const data = this.userRepository.findOne({ id: 7 });
      return {
        code: 200,
        message: "user data successfully fetch",
        // data,
      };
    } catch (error) {
      throw error;
    }
  }

  public static create(request, response) {
    return new UserUseCase(request, response, new UserRepository());
  }
}
