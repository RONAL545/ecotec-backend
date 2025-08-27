import { Test, TestingModule } from '@nestjs/testing';
import { DetallesPersonalController } from './detalles-personal.controller';

describe('DetallesPersonalController', () => {
  let controller: DetallesPersonalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallesPersonalController],
    }).compile();

    controller = module.get<DetallesPersonalController>(DetallesPersonalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
