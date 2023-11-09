import { Test, TestingModule } from '@nestjs/testing';
import { NumerosService } from './numeros.service';

describe('NumerosService', () => {
  let service: NumerosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumerosService],
    }).compile();

    service = module.get<NumerosService>(NumerosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find occurrences of a value in an array', () => {
    const testArray = [1, 2, 3, 2, 4, 2, 5, 2];
    const valueToSearch = 2;

    const occurrences = service.searchValueInArray(testArray, valueToSearch);

    expect(occurrences).toBe(4);
  });

  it('should handle empty array', () => {
    const testArray: number[] = [];
    const valueToSearch = 5;

    const occurrences = service.searchValueInArray(testArray, valueToSearch);

    expect(occurrences).toBe(0);
  });

  it('should handle value not found in array', () => {
    const testArray = [1, 2, 3, 2, 4, 2, 5, 2];
    const valueToSearch = 10;

    const occurrences = service.searchValueInArray(testArray, valueToSearch);

    expect(occurrences).toBe(0);
  });
});
