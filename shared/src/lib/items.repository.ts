import { Item } from './shared';

const items: Item[] = [];

export const ItemsRepository = {
  create(item: Item) {
    items.push(item);
  },
  findById(id: number): Item | undefined {
    return items.find((item) => item.id === id);
  },
};
