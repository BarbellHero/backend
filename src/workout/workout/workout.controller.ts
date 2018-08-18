import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateWorkoutDto } from './create-workout-dto';

@Controller('workout')
export class WorkoutController {
  @Get()
  findAll() {
    return 'This finds all workouts, yeah!';
  }

  @Post()
  create(@Body() createWorkoutDto: CreateWorkoutDto) {
    return 'This creates a workout with name ' + createWorkoutDto.name;
  }
}
