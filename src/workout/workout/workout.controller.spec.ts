import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutController } from './workout.controller';

describe('Workout Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [WorkoutController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: WorkoutController = module.get<WorkoutController>(WorkoutController);
    expect(controller).toBeDefined();
  });
});
