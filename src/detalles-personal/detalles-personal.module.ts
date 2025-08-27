import { Module } from '@nestjs/common';
import { DetallesPersonalService } from './detalles-personal.service';
import { DetallesPersonalController } from './detalles-personal.controller';

@Module({
  providers: [DetallesPersonalService],
  controllers: [DetallesPersonalController]
})
export class DetallesPersonalModule {}
