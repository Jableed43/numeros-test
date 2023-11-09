import { Module } from '@nestjs/common';
import { NumerosController } from './numeros.controller';
import { NumerosService } from './numeros.service';

@Module({
  controllers: [NumerosController],
  providers: [NumerosService],
})
export class NumerosModule {}
