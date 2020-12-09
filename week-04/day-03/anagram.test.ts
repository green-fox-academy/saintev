'use strict';

import * as test from 'tape';
import { testForAnagram } from './anagram';

test('should say true when two words are anagrams with function', t => {
  
  const actual = testForAnagram('listen','silent');
  const expected = true;

  t.equal(actual, expected);
  t.end();
  
});

