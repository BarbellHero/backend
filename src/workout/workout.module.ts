import { Module } from '@nestjs/common';
import { WorkoutController } from './workout/workout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workout } from './workout.entity';
import { WorkoutService } from './workout.service';

@Module({
  imports: [TypeOrmModule.forFeature([Workout])],
  controllers: [WorkoutController],
  providers: [WorkoutService]
})
export class WorkoutModule {}
