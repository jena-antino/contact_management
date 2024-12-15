import { Op, Sequelize } from "sequelize";
import ContactRepository from "../../../repositories/ContactRepository";
import BaseUseCase from "../../BaseUseCase";
import { joiObjectEnum } from "../../../domain/enumerations/Enumerations";
import SearchContactJoi from "./SearchContactJoi";

export default class SearchContactUseCase extends BaseUseCase {
  private contactRepository: ContactRepository;

  constructor(request, response, contactRepository: ContactRepository) {
    super(request, response);
    this.contactRepository = contactRepository;
  }

  public async execute() {
    try {
      this.validate(joiObjectEnum.REQUEST_PARAMS, SearchContactJoi);
      const searchQuery = this.pathParams.query.trim();
      // const searchQuery = "searchTerm";
      const condition = {
        where: {
          [Op.or]: [
            { name: { [Op.iLike]: `%${searchQuery}%` } },
            { email: { [Op.iLike]: `%${searchQuery}%` } },
            { phone_number: { [Op.iLike]: `%${searchQuery}%` } },
            { tag: { [Op.iLike]: `%${searchQuery}%` } },
            { contact_id: { [Op.iLike]: `%${searchQuery}%` } },
          ],
        },
      };
      const data = await this.contactRepository.find(condition);

      return {
        code: 200,
        message: "data fetch successfully ",
        data,
      };
    } catch (error) {
      throw error;
    }
  }

  public static create(request, response) {
    return new SearchContactUseCase(request, response, new ContactRepository());
  }
}
