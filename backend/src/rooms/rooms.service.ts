import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomsService {
  findAll(): object {
    return { a: 123 };
  }
}
