import { Module } from '@nestjs/common';
import { DetallesEstudiantesService } from './detalles-estudiantes.service';
import { DetallesEstudiantesController } from './detalles-estudiantes.controller';

@Module({
  providers: [DetallesEstudiantesService],
  controllers: [DetallesEstudiantesController]
})
export class DetallesEstudiantesModule {}
