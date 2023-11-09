import { Controller, Post, Body } from '@nestjs/common';
import { NumerosService } from './numeros.service';

@Controller('search')
export class NumerosController {
  constructor(private readonly numerosService: NumerosService) {}

  @Post('findOccurrences')
  findOccurrences(
    @Body() request: { arr: number[]; numToSearch: number },
  ): number {
    const { arr, numToSearch } = request;
    return this.numerosService.searchValueInArray(arr, numToSearch);
  }
}
