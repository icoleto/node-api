import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getFibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return this.getFibonacci(n - 1) + this.getFibonacci(n - 2);
  }
}

