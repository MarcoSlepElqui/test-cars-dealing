import { Controller, Get, MethodNotAllowedException, Param , ParseUUIDPipe, ValidationPipe,Post,Body, Patch, Delete, UsePipes} from '@nestjs/common';
import { get } from 'http';
import { CarsService } from './cars.service';
import { CreateCarsDto } from './dto/create-cars.dto';

@Controller('cars')
export class CarsController {
   
    constructor( 
        private readonly carsServices : CarsService
    ){}
    @Get()
    getAllCars(){
        return this.carsServices.findAll();
    }


    @Get(':id')
    getCarById(@Param('id', new  ParseUUIDPipe({version: '4'}) ) id2:string    ){/*
        console.log({id2});
        console.log('id = '+id2);/// lo mismo
        if (+id2 < 2) {
            return this.cars[+id2];
        }else   
            return "Número mayor que el arreglo";*/
        console.log({id:+id2});
        return this.carsServices.findOneByID(id2);
            
    }

    @Post()
    @UsePipes(ValidationPipe)
    createCar(@Body() objCreateCarsDto: CreateCarsDto){
       /* return {
            ok: "Creando un auto",
            method: 'POST'
        };*/
        return objCreateCarsDto;
    }  
    
    @Patch(':id')
    updateCar(
            @Param('id') id: number, 
            @Body() body:any
        ){
      
        return body;
    }  
    
     @Delete(':id')

    deleteCar(@Param('id') id: number){
        return {
            ok: "Eliminando un auto",
            method: 'DELETE',
            id: id  
        };
    }  

}


