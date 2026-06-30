import { Injectable } from '@nestjs/common';
import { CARS_SEED } from '../data/cars.seed';
import { BRAND_SEED } from '../data/brand.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
@Injectable()
export class SeedService {
  constructor (
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService
  ){}
  
  poblarDB(){
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillCarsWithSeedData(BRAND_SEED);
    return 'SEED executed';
  }
  pobla

  
}
