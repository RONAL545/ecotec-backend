import { Test, TestingModule } from '@nestjs/testing';
import { DetallesEstudiantesController } from './detalles-estudiantes.controller';

describe('DetallesEstudiantesController', () => {
  let controller: DetallesEstudiantesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallesEstudiantesController],
    }).compile();

    controller = module.get<DetallesEstudiantesController>(DetallesEstudiantesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
