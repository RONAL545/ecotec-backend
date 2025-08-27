import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsOptional()
  @IsString()
  codigo?: string;

  @IsNotEmpty()
  @IsString()
  nombreCompleto: string;

  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  contrasena: string;

  @IsNotEmpty()
  @IsEnum(['estudiante', 'personal', 'administrador'], {
    message: 'Rol no válido',
  })
  rol: 'estudiante' | 'personal' | 'administrador';

  @IsNotEmpty()
  sedeId: number;
}
