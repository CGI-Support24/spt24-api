import { Test, TestingModule } from '@nestjs/testing';
import { Spt24Service } from './spt24.service';

describe('Spt24Service', () => {
  let service: Spt24Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Spt24Service],
    }).compile();

    service = module.get<Spt24Service>(Spt24Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
