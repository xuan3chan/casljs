import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateItemCommand, GetItemQuery } from '@casljs/cqrs';
import { ForbiddenError } from '@casl/ability';
import { AbilityFactory } from './ability.factory';

@Controller('items')
export class AppController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
    private abilityFactory: AbilityFactory,
  ) {}

  @Post()
  create(@Body() dto: { id: number; name: string }) {
    const ability = this.abilityFactory.createForUser();
    ForbiddenError.from(ability).throwUnlessCan('create', 'Item');
    return this.commandBus.execute(new CreateItemCommand(dto.id, dto.name));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const ability = this.abilityFactory.createForUser();
    ForbiddenError.from(ability).throwUnlessCan('read', 'Item');
    return this.queryBus.execute(new GetItemQuery(Number(id)));
  }
}
