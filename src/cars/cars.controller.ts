import { Controller, Get, MethodNotAllowedException, Param , ParseIntPipe, Post,Body, Patch, Delete} from '@nestjs/common';
import { get } from 'http';
import { CarsService } from './cars.service';



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
    getCarById(@Param('id', ParseIntPipe) id2:number){/*
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
    createCar(@Body() body:any){
       /* return {
            ok: "Creando un auto",
            method: 'POST'
        };*/
        return body;
    }  
    
    @Patch(':id')
    updateCar(
<<<<<<< HEAD
            @Param('id') id: string, 
=======
            @Param('id') id: number, 
>>>>>>> 55fbd944ee98332b63b34d629efa632629c4e2ad
            @Body() body:any
        ){
      
        return body;
    }  
    
     @Delete(':id')
<<<<<<< HEAD
    deleteCar(@Param('id') id: string){
=======
    deleteCar(@Param('id') id: number){
>>>>>>> 55fbd944ee98332b63b34d629efa632629c4e2ad
      
        return {
            ok: "Eliminando un auto",
            method: 'DELETE',
            id: id  
        };
    }  

}
