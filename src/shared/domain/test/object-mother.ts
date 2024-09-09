import { Fakerjs } from '../../infrastructure/test/fakerjs';
import { Faker } from './faker';

export abstract class ObjectMother {
  protected static faker: Faker = new Fakerjs();
}
