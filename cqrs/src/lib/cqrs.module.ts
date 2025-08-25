import { Module } from '@nestjs/common';
import { CqrsModule as NestCqrsModule } from '@nestjs/cqrs';
import { CreateItemHandler } from './handlers/create-item.handler';
import { GetItemHandler } from './handlers/get-item.handler';

const commandHandlers = [CreateItemHandler];
const queryHandlers = [GetItemHandler];

@Module({
  imports: [NestCqrsModule],
  providers: [...commandHandlers, ...queryHandlers],
  exports: [NestCqrsModule],
})
export class CaslCqrsModule {}
