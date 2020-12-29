import { Module } from '@nestjs/common';
import { ResultTypesModule } from 'src/result-types/result-types.module';
import { ResultsController } from './results.controller';
import { ResultsService } from './results.service';

@Module({
  imports: [ResultTypesModule],
  controllers: [ResultsController],
  providers: [ResultsService],
})
export class ResultsModule {}
