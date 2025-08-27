import { Module } from '@nestjs/common';
import { ReciclajeService } from './reciclaje.service';
import { ReciclajeController } from './reciclaje.controller';

@Module({
  providers: [ReciclajeService],
  controllers: [ReciclajeController]
})
export class ReciclajeModule {}
