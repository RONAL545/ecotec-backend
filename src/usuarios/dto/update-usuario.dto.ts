import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsOptional, IsString, MinLength, IsEmail, IsEnum } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsOptional()
  @IsString()
  nombreCompleto?: string;

  @IsOptional()
  @IsEmail()
  correo?: string;

  @IsOptional()
  @MinLength(6)
  contrasena?: string;

  @IsOptional()
  @IsEnum(['estudiante', 'personal', 'administrador'])
  rol?: 'estudiante' | 'personal' | 'administrador';

  @IsOptional()
  sedeId?: number;
}
