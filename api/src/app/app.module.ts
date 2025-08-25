import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CaslCqrsModule } from '@casljs/cqrs';
import { AbilityFactory } from './ability.factory';

@Module({
  imports: [CaslCqrsModule],
  controllers: [AppController],
  providers: [AbilityFactory],
})
export class AppModule {}
