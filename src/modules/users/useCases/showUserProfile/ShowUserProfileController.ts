import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;
      const user = this.showUserProfileUseCase.execute({ user_id });
      return response.json(user);
    } catch (e) {
      return response.status(404).json({ error: "User id not found!" });
    }
  }
}

export { ShowUserProfileController };
