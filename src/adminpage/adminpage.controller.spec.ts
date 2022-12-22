import { Test, TestingModule } from '@nestjs/testing';
import { AdminpageController } from './adminpage.controller';

describe('AdminpageController', () => {
  let controller: AdminpageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminpageController],
    }).compile();

    controller = module.get<AdminpageController>(AdminpageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
