import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarsDto {
    @IsString({message: 'El id debe ser un string UUID'})
    @IsUUID('4', {message: 'El id debe ser un UUID versión 4'})
    @IsOptional()
    readonly id? : string;

    @IsString({message: 'El brand debe ser un string'})
    @MinLength(3, {message: 'El brand debe tener al menos 3 caracteres'})
    @IsOptional()
    readonly brand? : string;


    @IsString({message: 'El modelo debe ser un string'})
    @IsOptional()
    readonly model? : string;
}
/*
/NOTAS
Se agrega el decorador IsOptional para que no sea obligatorio enviar todos
los campos al actualizar un auto, ya que se puede actualizar solo uno
de ellos.

*/