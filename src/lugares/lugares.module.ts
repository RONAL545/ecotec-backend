import { Module } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import { LugaresController } from './lugares.controller';

@Module({
  providers: [LugaresService],
  controllers: [LugaresController]
})
export class LugaresModule {}
