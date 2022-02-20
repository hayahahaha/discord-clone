import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Res,
  HttpCode,
  HostParam,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}
  @Get()
  findAll(@Req() req: Request): string {
    return 'Find All';
  }

  @Post()
  @HttpCode(201)
  create(@Req() req: Request ): string {
    return 'Create new Rooms ';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log('params: ', params.id);
    return `This Request find #${params.id} one`;
  }

  @Delete()
  delete(): string {
    return 'this request delete one';
  }
}
