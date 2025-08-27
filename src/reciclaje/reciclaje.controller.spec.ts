import { Test, TestingModule } from '@nestjs/testing';
import { ReciclajeController } from './reciclaje.controller';

describe('ReciclajeController', () => {
  let controller: ReciclajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReciclajeController],
    }).compile();

    controller = module.get<ReciclajeController>(ReciclajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
