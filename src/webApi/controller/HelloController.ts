import { Request, Response } from "express";
import { HelloUseCase } from "../../application/usecases/HelloUseCase";

export class HelloController {
  constructor(private helloUseCase: HelloUseCase) {}

  getHello(req: Request, res: Response): void {
    const hello = this.helloUseCase.execute();
    res.json({ message: hello.getMessage() });
  }
}
