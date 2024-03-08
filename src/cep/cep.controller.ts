import { Controller, Get, Param } from '@nestjs/common';
import { ViaCepService } from '../via-cep/via-cep.service';

@Controller('cep')
export class CepController {
  constructor(private readonly viaCepService: ViaCepService) {}

  @Get(':cep')
  async searchCep(@Param('cep') cep: string): Promise<any> {
    try {
      const result = await this.viaCepService.searchCep(cep);
      return result;
    } catch (error) {
      return { error: 'CEP não encontrado' };
    }
  }
}
