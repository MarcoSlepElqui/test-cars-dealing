//import { PartialType } from '@nestjs/mapped-types';
//import { CreateBrandDto } from './create-brand.dto';
import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

//export class UpdateBrandDto extends PartialType(CreateBrandDto) {
export class UpdateBrandDto {
       
        @IsString({message: 'El brand debe ser un string'})
        @MinLength(1, {message: 'El brand debe tener al menos 3 caracteres'})
        @IsOptional()
        readonly name? : string;
    
    
       
}
