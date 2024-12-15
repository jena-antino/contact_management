import ContactModel from "../domain/schemas/contact/Contact";
import BaseRepositories from "./BaseRepository";

export default class ContactRepository extends BaseRepositories {
  constructor() {
    super();
  }

  public model() {
    return ContactModel;
  }
}
