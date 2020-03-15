import { Controller, Get, Param, Res, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService) { }

  @Get()
  getHello(): string {
    return 'Hello Node World!';
  }

  @Get('fibonacci/:num')
  getFibonacci(@Param("num") num: number): { n: number, value: number } {
    return { n: Number(num), value: this.appService.getFibonacci(num) };
  }

  @Get('user')
  getUserByName(@Query('name') name: string) {
    console.log(name);
    return this.userService.getUsersByName(name);
  }
}
