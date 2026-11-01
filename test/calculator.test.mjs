import test from 'node:test';
import assert from 'node:assert/strict';
import {add} from '../src/calculator.mjs';
test('two plus three equals five', () => assert.equal(add(2, 3), 5));