import { ObjectMother } from '../../../../shared';
import { User } from '../types/user';

export class UserMother extends ObjectMother {
  static dto(override?: Partial<User>) {
    return {
      id: this.faker.uuid(),
      firstName: this.faker.firstName(),
      lastName: this.faker.lastName(),
      ...override,
    };
  }
}
