import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import {Brand} from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [/*
        {
            id:uuid(),
            name: 'Toyota',
            createdAt : new Date().getTime()
         
        },
        {
            id:uuid(),
            name: 'Honda',
            createdAt : new Date().getTime()
           
        },
        {
            id:uuid(),
            name: 'Jeep',
            createdAt : new Date().getTime()
          
        }*/
    ];
  
  create(createBrandDto: CreateBrandDto) {
    const {name} = createBrandDto; 
     const marca: Brand = {
               id: uuid(),
               name:name.toLocaleLowerCase(),
               createdAt: new Date().getTime(),
           };

           this.brands.push(marca);
           return marca;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
   
           const brand = this.brands.find(brand => brand.id===id);
   
           if (!brand){
               throw new NotFoundException(`Brand con ID '${id}' no encontrado`);
           }
           return brand;
  }

  update(id: string, UpdateBrandsDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);//busca en la base de datos
        
        this.brands = this.brands.map(brand => { //mapea y busca en que parte del arreglo está el auto con el id que se busca
            if (brand.id === id){
                brandDB.updatedAt = new Date().getTime();
                brandDB = {...brandDB, ...UpdateBrandsDto};
                //se actualiza el auto con los datos que se envían en actualizarAuto,
                //  y se mantiene el id

                return brandDB;
            }
            return brand; //si no es el auto que se busca, se devuelve tal cual
        });
        return brandDB;//en caso que no encontro el id se envía el auto que se buscaba
  }

  remove(id: string) {
     let brandDB = this.findOne(id);//busca el brand en la base de datos
        this.brands = this.brands.filter(marca => marca.id !== id);//filtra y devuelve todos los autos que no tengan el id que se busca
        return brandDB;//en caso que no encontro el id se envía el auto que se buscaba
  }
}
