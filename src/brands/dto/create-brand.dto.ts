import { IsString, MinLength } from "class-validator";


export class CreateBrandDto {
    @IsString()
    @MinLength(1)//para que por lo menos ingrese un string en la marca
    name: string;
}
