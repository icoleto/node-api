import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return 'Hello Node World!';
  }

  @Get('fibonacci/:num')
  getFibonacci(@Param("num") num: number): { n: number, value: number } {
    return { n: Number(num), value: this.appService.getFibonacci(num) };
  }
}
