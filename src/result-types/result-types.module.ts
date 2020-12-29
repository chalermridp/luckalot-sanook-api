import { CacheModule, Module } from '@nestjs/common';
import { ResultTypesService } from './result-types.service';

@Module({
  imports: [CacheModule.register()],
  providers: [ResultTypesService],
  exports: [ResultTypesService],
})
export class ResultTypesModule {}
