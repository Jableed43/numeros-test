import { Injectable } from '@nestjs/common';

@Injectable()
export class NumerosService {
  searchValueInArray(arr: number[], valueToSearch: number): number {
    return arr.filter((item) => item === valueToSearch).length;
  }
}
