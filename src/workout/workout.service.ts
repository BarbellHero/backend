import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './workout.entity';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout)
    private readonly workoutRepository: Repository<Workout>
  ) { }

  async findAll() {
    return await this.workoutRepository.find();
  }

  async create(workout: Workout) {
    return await this.workoutRepository.save(workout);
  }
}
