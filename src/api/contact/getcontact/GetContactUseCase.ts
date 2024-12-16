import { Op } from "sequelize";
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
      this.validate(joiObjectEnum.REQUEST_QUERY, GetContactJoi);

      const page = parseInt(this.queryParams.page, 10) || 1;
      const limit = parseInt(this.queryParams.limit, 10) || 5;
      const offset = (page - 1) * limit;
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

      const { rows, count } = await this.contactRepository.findAndCount({
        ...condition,
        limit,
        offset,
        order: [["createdAt", "DESC"]],
      });

      return {
        code: 200,
        message: "user data successfully fetch",
        data: {
          data: rows,
          meta: {
            totalRecords: count,
            currentPage: page,
            totalPages: Math.ceil(count / limit),
            pageSize: rows.length,
          },
        },
      };
    } catch (error) {
      throw error;
    }
  }

  public static create(request, response) {
    return new GetContactUseCase(request, response, new ContactRepository());
  }
}
