import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interface/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarsDto , UpdateCarsDto} from './dto/index';
@Injectable()
export class CarsService {
    private cars: Car[] = [
    ];

    findAll(){
        return this.cars;
    }

    findOneByID( id:string){
        
        const car = this.cars.find(car => car.id===id);

        if (!car){
            throw new NotFoundException(`Auto con ID '${id}' no encontrado`);
        }
        return car;

    }

    ///////OPT1//////////////////////////
    /*
    create (nuevoAuto: CreateCarsDto){
        const auto: Car = {
            id: uuid(),
            brand: nuevoAuto.brand,
            model: nuevoAuto.model
        };
        this.cars.push(auto);
        return auto;
    }*/
    ///////OPT2//////////////////////////
    /*
    create ({brand, model}: CreateCarsDto){
        const auto: Car = {
            id: uuid(),
            brand,
            model
        };
        this.cars.push(auto);
        return auto;
    }*/
     ///////OPT3 se usa mas//////////////////////////
    create (nuevoAuto: CreateCarsDto){
        const auto: Car = {
            id: uuid(),
            ...nuevoAuto
        };
        this.cars.push(auto);
        return auto;
    }
    update(id: string, actualizarAuto: UpdateCarsDto){
        let carDB = this.findOneByID(id);//busca el auto en la base de datos
        if (actualizarAuto.id && actualizarAuto.id !== id){
            throw new NotFoundException(`El id del body no es el mismo que el id de la url`);
        }
       //en caso que no encuentre el auto se saldrá y no entrara a las siguientes lineas
        this.cars = this.cars.map(car => { //mapea y busca en que parte del arreglo está el auto con el id que se busca
            if (car.id === id){
                carDB = {...carDB, ...actualizarAuto, id};
                //se actualiza el auto con los datos que se envían en actualizarAuto,
                //  y se mantiene el id

                return carDB;
            }
            return car; //si no es el auto que se busca, se devuelve tal cual
        });
        return carDB;//en caso que no encontro el id se envía el auto que se buscaba
    }

    delete(id: string){
        let carDB = this.findOneByID(id);//busca el auto en la base de datos
        this.cars = this.cars.filter(car => car.id !== id);//filtra y devuelve todos los autos que no tengan el id que se busca
        return carDB;//en caso que no encontro el id se envía el auto que se buscaba
    }
    fillCarsWithSeedData(autos: Car[]){
        this.cars = autos;
    }

}
