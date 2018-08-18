import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutModule } from './workout/workout.module';
import { environment } from '../environment/environment';

@Module({
  imports: [
    WorkoutModule,
    TypeOrmModule.forRoot(environment.dbConnection)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
