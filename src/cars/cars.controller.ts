import { Controller, Get, MethodNotAllowedException, Param , ParseUUIDPipe, ValidationPipe,Post,Body, Patch, Delete, UsePipes} from '@nestjs/common';
import { get } from 'http';
import { CarsService } from './cars.service';
/*
import { CreateCarsDto } from './dto/create-cars.dto';
import { UpdateCarsDto } from './dto/update-cars.dto';
*/
///se crea un index para agrupar los dtos y no tener que importarlos de manera individual
import { CreateCarsDto, UpdateCarsDto } from './dto/index';
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
        return this.carsServices.create(objCreateCarsDto);
    }  
    
    @Patch(':id')
    updateCar(
            @Param('id',  ParseUUIDPipe) id: string, 
            @Body() objUpdateCarsDto: UpdateCarsDto
        ){
      
        return this.carsServices.update(id, objUpdateCarsDto);
        
    }  
    
     @Delete(':id')

    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        return this.carsServices.delete(id);
    }  

}


