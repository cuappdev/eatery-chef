import { Eatery } from '../models/Eatery'

export default class DummyData {
  static eateries: Eatery[] = [
    new Eatery('104west', '... West Ave', 'Kosher Dining Hall'),
    new Eatery('anabel', '... West Ave', 'Kosher Dining Hall'),
    new Eatery('cafe-jennie', '... West Ave', 'Kosher Dining Hall'),
    new Eatery('cornell-dairy-bar', '... West Ave', 'Kosher Dining Hall'),
    new Eatery('gimme-coffee', '... West Ave', 'Kosher Dining Hall'),
    new Eatery('mattins-cafe', '... West Ave', 'Kosher Dining Hall'),
    new Eatery('okenshields', '... West Ave', 'Kosher Dining Hall'),
    new Eatery('risley', '... West Ave', 'Kosher Dining Hall'),
  ]
}
