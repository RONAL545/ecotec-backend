import { Test, TestingModule } from '@nestjs/testing';
import { DetallesPersonalService } from './detalles-personal.service';

describe('DetallesPersonalService', () => {
  let service: DetallesPersonalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallesPersonalService],
    }).compile();

    service = module.get<DetallesPersonalService>(DetallesPersonalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
