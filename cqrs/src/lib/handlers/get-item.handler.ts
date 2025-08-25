import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetItemQuery } from '../queries/get-item.query';
import { ItemsRepository, Item } from '@casljs/shared';

@QueryHandler(GetItemQuery)
export class GetItemHandler implements IQueryHandler<GetItemQuery> {
  execute(query: GetItemQuery): Promise<Item | undefined> {
    return Promise.resolve(ItemsRepository.findById(query.id));
  }
}
