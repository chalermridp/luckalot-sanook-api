import { Module } from '@nestjs/common';
import { ResultTypesService } from './result-types.service';
import { ResultTypesController } from './result-types.controller';

@Module({
  providers: [ResultTypesService],
  exports: [ResultTypesService],
  controllers: [ResultTypesController],
})
export class ResultTypesModule {}
