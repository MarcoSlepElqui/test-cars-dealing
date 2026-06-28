import { Module } from '@nestjs/common';
import { CarsService } from './cars/cars.service';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';


@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [CarsService],

})
export class AppModule {}
