import express, { Request, Response } from "express";
import urlConstant from "../../domain/constants/urlConstant/urlConstant";
import UpdateContactUseCase from "../contact/updatecontact/UpdateContactUseCase";
const router = express.Router();

router.post(urlConstant.user.createUser, async (request: Request, response: Response) => {
  const useCase = UpdateContactUseCase.create(request, response);
  await useCase.executeAndHandleErrors();
});

export default router;
