import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;
      const userAdmin = this.turnUserAdminUseCase.execute({ user_id });
      return response.json(userAdmin);
    } catch (e) {
      return response.status(404).json({ error: "User not found!" });
    }
  }
}

export { TurnUserAdminController };
