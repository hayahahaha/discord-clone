import { Controller, Get } from '@nestjs/common';

@Controller('channels')
export class ChannelsController {
  @Get()
  findAll(): string {
    console.log('find All');
    return 'Hello find All';
  }
}
