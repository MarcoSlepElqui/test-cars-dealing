import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('cars')
export class CarsController {
    private cars= ['Toyota', 'Honda', 'Jeep'];
    @Get()
    getAllCars(){
        return this.cars;
    }


    @Get(':id')
    getCarById(@Param('id') id2:string){
        console.log({id2});
        console.log('id = '+id2);/// lo mismo
        if (+id2 < 2) {
            return this.cars[+id2];
        }else   
            return "Número mayor que el arreglo";
            
    }
}
