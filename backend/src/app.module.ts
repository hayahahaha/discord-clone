import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RoomsController } from './rooms/rooms.controller';
import { RoomsService } from './rooms/rooms.service';
import { ChannelsController } from './channels/channels.controller';
import { UsersModule } from './users/users.module';
import { ConversationsModule } from './conversations/conversations.module';

@Module({
  imports: [UsersModule, ConversationsModule],
  controllers: [AppController, RoomsController, ChannelsController],
  providers: [AppService, RoomsService],
})
export class AppModule {}
