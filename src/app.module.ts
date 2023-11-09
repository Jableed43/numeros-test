import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NumerosModule } from './numeros/numeros.module';

@Module({
  imports: [NumerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
