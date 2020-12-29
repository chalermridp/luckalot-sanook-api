import { Controller, Get, Param } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private resultService: ResultsService) {}

  @Get('/:date')
  getByDate(@Param('date') date: string) {
    return this.resultService.getByDate(date);
  }
}
