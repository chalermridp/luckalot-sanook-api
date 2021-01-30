import { Controller, Get } from '@nestjs/common';
import { ResultTypesService } from './result-types.service';

@Controller('result-types')
export class ResultTypesController {
  constructor(private resultTypesService: ResultTypesService) {}

  @Get()
  getAll() {
    return this.resultTypesService.getAll();
  }
}
