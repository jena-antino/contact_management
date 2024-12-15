import express, { Request, Response } from "express";

import urlConstant from "../../domain/constants/urlConstant/urlConstant";
import UserUseCase from "../user/UserUseCase";
import CreateContactUseCase from "./createcontact/CreateContactUseCase";
import GetContactUseCase from "./getcontact/GetContactUseCase";
import DeleteUseCase from "./deletecontact/DeleteContactUseCase";
import UpdateContactUseCase from "./updatecontact/UpdateContactUseCase";
import ContactCategoryUseCase from "./categoryContact/ContactCategoryUseCase";
import SearchContactUseCase from "./searchContact/SearchContactUseCase";
const router = express.Router();

router.post(urlConstant.contact.create_contact, async (request: Request, response: Response) => {
  const useCase = CreateContactUseCase.create(request, response);
  await useCase.executeAndHandleErrors();
});
router.put(urlConstant.contact.update_contact, async (request: Request, response: Response) => {
  const useCase = UpdateContactUseCase.create(request, response);
  await useCase.executeAndHandleErrors();
});
router.delete(urlConstant.contact.delete_contact, async (request: Request, response: Response) => {
  const useCase = DeleteUseCase.create(request, response);
  await useCase.executeAndHandleErrors();
});
router.get(urlConstant.contact.find_contact, async (request: Request, response: Response) => {
  const useCase = SearchContactUseCase.create(request, response);
  await useCase.executeAndHandleErrors();
});

router.get(urlConstant.contact.all_contact, async (request: Request, response: Response) => {
  const useCase = GetContactUseCase.create(request, response);
  await useCase.executeAndHandleErrors();
});
router.post(urlConstant.contact.filter_contact, async (request: Request, response: Response) => {
  const useCase = UserUseCase.create(request, response);
  await useCase.executeAndHandleErrors();
});
router.get(urlConstant.contact.count_category, async (request: Request, response: Response) => {
  const useCase = ContactCategoryUseCase.create(request, response);
  await useCase.executeAndHandleErrors();
});
router.delete(urlConstant.contact.bulk_delete_contact, async (request: Request, response: Response) => {
  const useCase = UserUseCase.create(request, response);
  await useCase.executeAndHandleErrors();
});

export default router;
