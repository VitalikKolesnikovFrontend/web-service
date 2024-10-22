import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  handlePost(@Body() data: any) {
    console.log(data);
    return { message: 'Data received successfully' };
  }
}
