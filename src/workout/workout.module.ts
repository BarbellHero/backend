import { Module } from '@nestjs/common';
import { WorkoutController } from './workout/workout.controller';

@Module({
  controllers: [WorkoutController]
})
export class WorkoutModule {}
