import { Injectable } from '@nestjs/common';
import { ResultType } from './result-types.model';
import * as data from './result-types.data.json';

@Injectable()
export class ResultTypesService {
  getAll(): ResultType[] {
    return data;
  }

  getResultTypeCodeByIndex(index: number): string {
    try {
      return this.getAll()[index].code;
    } catch (error) {
      console.log(error);
      return '';
    }
  }
}
