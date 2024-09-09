import { faker } from '@faker-js/faker';
import { Faker } from '../../domain/test/faker';

export class Fakerjs implements Faker {
  firstName(): string {
    return faker.person.firstName();
  }

  lastName(): string {
    return faker.person.lastName();
  }

  uuid(): string {
    return faker.string.uuid();
  }
}
