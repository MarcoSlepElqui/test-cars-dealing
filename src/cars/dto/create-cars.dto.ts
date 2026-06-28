import { IsString, MinLength } from "class-validator";

export class CreateCarsDto {
    @IsString({message: 'El brand debe ser un string'})
    @MinLength(3, {message: 'El brand debe tener al menos 3 caracteres'})
    readonly brand : string;


    @IsString({message: 'El modelo debe ser un string'})
    readonly model : string;
}