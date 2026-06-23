import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    private cars = ['Toyota', 'Honda', 'Jeep'];
    @Get()
    getAllCars(){
        return this.cars;
    }
}
