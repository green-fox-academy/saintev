'use strict';

import * as test from 'tape';
import { countLetters } from './count-letters';

test('should count the letters in a string', t => {
  
  const actual = countLetters('aad');
  const expected = {
    a: 2,
    d: 1
  }

  t.deepEqual(actual, expected);
  t.end();
  
});