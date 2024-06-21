import { Hello } from "../../domain/entities/Hello";

export class HelloUseCase {
  execute(): Hello {
    return new Hello("Hello, World!");
  }
}
