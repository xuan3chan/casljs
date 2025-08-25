import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateItemCommand } from '../commands/create-item.command';
import { ItemsRepository } from '@casljs/shared';

@CommandHandler(CreateItemCommand)
export class CreateItemHandler implements ICommandHandler<CreateItemCommand> {
  async execute(command: CreateItemCommand): Promise<void> {
    ItemsRepository.create({ id: command.id, name: command.name });
  }
}
