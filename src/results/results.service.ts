import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { ResultTypesService } from 'src/result-types/result-types.service';
import { Result } from './results.model';

@Injectable()
export class ResultsService {
  constructor(private resultTypeService: ResultTypesService) {}

  async getByDate(date: string): Promise<Result[]> {
    const dateAsSanookFormat = this.toSanookDateFormat(date);
    const url = `https://news.sanook.com/lotto/check/${dateAsSanookFormat}`;
    const lotto = await axios.get(url);
    const $ = cheerio.load(lotto.data);
    const results = [];
    $('.lotto__number').each((index, value) => {
      const result: Result = {
        value: $(value).text(),
        result_type_code: this.resultTypeService.getResultTypeCodeByIndex(index),
      };
      results.push(result);
    });
    return results;
  }

  private toSanookDateFormat(date: string): string {
    const splits = date.split('-');
    const year = splits[0];
    const month = splits[1];
    const day = splits[2];
    return day.concat(month, (parseInt(year) + 543).toString());
  }
}
