import { Module } from '@nestjs/common';
import { EvidenciasService } from './evidencias.service';
import { EvidenciasController } from './evidencias.controller';

@Module({
  providers: [EvidenciasService],
  controllers: [EvidenciasController]
})
export class EvidenciasModule {}
