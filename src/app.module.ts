import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
=======
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';


@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [CarsService],
>>>>>>> e38d4ef860fcaff35631c24bfc8f302e432fad69
})
export class AppModule {}
