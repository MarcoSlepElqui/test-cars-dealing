import { IsString } from "class-validator";

export class CreateCarsDto {
    @IsString({message: 'El brand debe ser un string'})
    readonly brand : string;
    @IsString({message: 'El modelo debe ser un string'})
    readonly model : string;
}