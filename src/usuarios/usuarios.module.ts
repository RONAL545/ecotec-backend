// src/usuarios/usuarios.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './entities/usuario.entity'; // Cuando crees la entidad

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]), // Descomenta cuando crees la entidad
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService], // Para usar el servicio en otros módulos
})
export class UsuariosModule {}