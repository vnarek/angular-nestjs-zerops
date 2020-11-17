import { Controller, Get } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { Message } from '@zerops-nx-angular-nestjs/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('hello')
  async getData(): Promise<Message[]> {
    Logger.log('GET /api/hello');
    process.exit(1);
    this.appService.createData();
    return this.appService.getData();
  }
}
