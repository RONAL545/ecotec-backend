import { Test, TestingModule } from '@nestjs/testing';
import { DetallesEstudiantesService } from './detalles-estudiantes.service';

describe('DetallesEstudiantesService', () => {
  let service: DetallesEstudiantesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallesEstudiantesService],
    }).compile();

    service = module.get<DetallesEstudiantesService>(DetallesEstudiantesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
