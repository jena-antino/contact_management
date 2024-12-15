import { Sequelize } from "sequelize";
import ContactRepository from "../../../repositories/ContactRepository";
import BaseUseCase from "../../BaseUseCase";

export default class ContactCategoryUseCase extends BaseUseCase {
  private contactRepository: ContactRepository;

  constructor(request, response, contactRepository: ContactRepository) {
    super(request, response);
    this.contactRepository = contactRepository;
  }

  public async execute() {
    try {
      const data = await this.contactRepository.find({
        attributes: [
          "tag", // The column to group by
          [Sequelize.fn("COUNT", Sequelize.col("tag")), "count"], // Count records for each tag
        ],
        group: ["tag"],
        order: [[Sequelize.literal("count"), "DESC"]],
      });

      return {
        code: 200,
        message: "category wise data fetch successfully ",
        data,
      };
    } catch (error) {
      throw error;
    }
  }

  public static create(request, response) {
    return new ContactCategoryUseCase(request, response, new ContactRepository());
  }
}
