import { HelloUseCase } from '../../src/core/application/usecases/HelloUseCase';

describe('HelloUseCase', () => {
  it('should return a Hello object with "Hello, World!" message', () => {
    const helloUseCase = new HelloUseCase();
    const hello = helloUseCase.execute();
    expect(hello.getMessage()).toBe('Hello, World!');
  });
});
