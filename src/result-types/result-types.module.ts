import { Module } from '@nestjs/common';
import { ResultTypesService } from './result-types.service';

@Module({
  providers: [ResultTypesService],
  exports: [ResultTypesService],
})
export class ResultTypesModule {}
