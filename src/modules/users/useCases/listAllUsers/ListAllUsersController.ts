import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const userId = request.header("user_id");

    console.log(userId);

    const users = this.listAllUsersUseCase.execute({ user_id: userId });

    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
