import express, { Request, Response } from "express";
import UserUseCase from "./UserUseCase";
import urlConstant from "../../domain/constants/urlConstant/urlConstant";
const router = express.Router();

router.post(urlConstant.user.createUser, async (request: Request, response: Response) => {
  const useCase = UserUseCase.create(request, response);
  await useCase.executeAndHandleErrors();
});

export default router;
