import { Ability, AbilityBuilder } from '@casl/ability';
import { Injectable } from '@nestjs/common';

export type Actions = 'create' | 'read';
export type Subjects = 'Item' | 'all';
export type AppAbility = Ability<[Actions, Subjects]>;

@Injectable()
export class AbilityFactory {
  createForUser() {
    const { can, build } = new AbilityBuilder<AppAbility>(Ability as any);
    can('create', 'Item');
    can('read', 'Item');
    return build();
  }
}
