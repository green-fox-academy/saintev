'use strict';

import * as test from 'tape';
import { Apple } from './apple';

test('should add 2 numbers', t => {
  const myApple = new Apple('apple');
  const actual = myApple.addApples(1, 2);
  const expected = 1 + 2;

  t.equal(actual,expected);
  t.end();

});

test('should add 2 numbers', t => {
  const myApple = new Apple('apple');
  const actual = myApple.addApples();
  const expected = 1 + 2;

  t.equal(actual,expected);
  t.end();

});