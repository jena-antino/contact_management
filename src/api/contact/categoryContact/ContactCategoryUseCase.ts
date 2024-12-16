import { Op, Sequelize } from "sequelize";
import ContactRepository from "../../../repositories/ContactRepository";
import BaseUseCase from "../../BaseUseCase";
import ContactCategoryJoi from "./ContactCategoryJoi";
import { joiObjectEnum } from "../../../domain/enumerations/Enumerations";

export default class ContactCategoryUseCase extends BaseUseCase {
  private contactRepository: ContactRepository;

  constructor(request, response, contactRepository: ContactRepository) {
    super(request, response);
    this.contactRepository = contactRepository;
  }

  public async execute() {
    try {
      this.validate(joiObjectEnum.REQUEST_PARAMS, ContactCategoryJoi);
      const searchQuery = this.queryParams?.search?.trim();
      const filterValue = this.queryParams?.filterBy?.trim();
      let condition = {};

      if (searchQuery) {
        condition = {
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
      }

      if (filterValue) {
        condition = {
          where: {
            status: filterValue,
          },
        };
      }
      const data = await this.contactRepository.find({
        ...condition,
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
