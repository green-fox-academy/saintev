'use strict';

import * as test from 'tape';
import { Apple} from './apple';

test('should compara two strings and print apple', t => {
  const myApple = new Apple('apple');

  t.equal('apple', 'apple');
  t.end();
});


