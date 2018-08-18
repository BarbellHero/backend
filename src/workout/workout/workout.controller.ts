import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateWorkoutDto } from './create-workout-dto';
import { WorkoutService } from '../workout.service';
import { Workout } from '../workout.entity';

@Controller('workout')
export class WorkoutController {
  constructor(private service: WorkoutService) { }

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Post()
  async create(@Body() createWorkoutDto: CreateWorkoutDto) {
    const workout = new Workout();
    Object.assign(workout, createWorkoutDto);
    return await this.service.create(workout);
  }
}
