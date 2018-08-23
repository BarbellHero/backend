import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './workout.entity';
import { WorkoutDto } from './workout-dto';
import { from } from 'rxjs/internal/observable/from';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout)
    private readonly workoutRepository: Repository<Workout>
  ) { }

  async find(id: number) {
    return await this.workoutRepository.findOne({ id });
  }

  async findAll() {
    return await this.workoutRepository.find();
  }

  async create(workoutDto: WorkoutDto) {
    return await this.workoutRepository.save(this.dtoToEntity(workoutDto));
  }

  async update(id: number, workout: WorkoutDto) {
    await this.ensureIdExists(id);
    return await this.workoutRepository.update({ id }, workout);
  }

  async delete(id: number) {
    await this.ensureIdExists(id);
    return await this.workoutRepository.delete({ id });
  }

  private dtoToEntity(workoutDto: WorkoutDto) {
    const workout = new Workout();
    Object.assign(workout, workoutDto);
    return workout;
  }

  private ensureIdExists(id: number) {
    return this.workoutRepository.findOneOrFail({ id }).catch(error => {
      throw new NotFoundException(error);
    });
  }
}
