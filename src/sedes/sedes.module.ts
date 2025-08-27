import { Module } from '@nestjs/common';
import { SedesService } from './sedes.service';
import { SedesController } from './sedes.controller';

@Module({
  providers: [SedesService],
  controllers: [SedesController]
})
export class SedesModule {}
