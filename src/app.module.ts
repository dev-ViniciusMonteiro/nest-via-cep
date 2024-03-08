import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViaCepService } from './via-cep/via-cep.service';
import { CepController } from './cep/cep.controller';

@Module({
  imports: [],
  controllers: [AppController, CepController],
  providers: [AppService, ViaCepService],
})
export class AppModule {}
