import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { WorkoutDto } from '../workout-dto';
import { WorkoutService } from '../workout.service';

@Controller('workout')
export class WorkoutController {
  constructor(private service: WorkoutService) { }

  @Get(':id')
  async find(@Param('id') id: number) {
    return await this.service.find(id);
  }

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Post()
  async create(@Body() createWorkoutDto: WorkoutDto) {
    return await this.service.create(createWorkoutDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateWorkoutDto: WorkoutDto) {
    return await this.service.update(id, updateWorkoutDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
