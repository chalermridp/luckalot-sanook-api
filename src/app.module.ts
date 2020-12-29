import { Module } from '@nestjs/common';
import { ResultsModule } from './results/results.module';
import { ResultTypesModule } from './result-types/result-types.module';

@Module({
  imports: [ResultsModule, ResultTypesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
