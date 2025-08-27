import { Test, TestingModule } from '@nestjs/testing';
import { ReciclajeService } from './reciclaje.service';

describe('ReciclajeService', () => {
  let service: ReciclajeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReciclajeService],
    }).compile();

    service = module.get<ReciclajeService>(ReciclajeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
