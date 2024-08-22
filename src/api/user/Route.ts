import express, { Request, Response } from "express";
import UserUseCase from "./UserUseCase";
const router = express.Router();

router.post("/create-user", async (request: Request, response: Response) => {
  const useCase = UserUseCase.create(request, response);
  await useCase.executeAndHandleErrors();
});

export default router;
