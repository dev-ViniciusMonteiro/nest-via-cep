import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ViaCepService {
  async searchCep(cep: string): Promise<any> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}
