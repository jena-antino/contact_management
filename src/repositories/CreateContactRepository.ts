import ContactModel from "../domain/schemas/contact/Contact";
import UserModel from "../domain/schemas/user/User";
import BaseRepositories from "./BaseRepository";

export default class CreateContactRepository extends BaseRepositories {
  constructor() {
    super();
  }

  public model() {
    return ContactModel;
  }
}
