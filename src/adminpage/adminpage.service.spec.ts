import { Test, TestingModule } from '@nestjs/testing';
import { AdminpageService } from './adminpage.service';

describe('AdminpageService', () => {
  let service: AdminpageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminpageService],
    }).compile();

    service = module.get<AdminpageService>(AdminpageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
