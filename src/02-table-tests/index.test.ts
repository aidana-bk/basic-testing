import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: -1, b: 1, action: Action.Add, expected: 0 },
  { a: 0, b: 0, action: Action.Add, expected: 0 },
  { a: 10, b: 10, action: Action.Add, expected: 20 },
  { a: 2, b: 1, action: Action.Subtract, expected: 1 },
  { a: -1, b: 1, action: Action.Subtract, expected: -2 },
  { a: 0, b: 0, action: Action.Subtract, expected: 0 },
  { a: 20000, b: 1, action: Action.Subtract, expected: 19999 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: -1, b: 1, action: Action.Multiply, expected: -1 },
  { a: 0, b: 0, action: Action.Multiply, expected: 0 },
  { a: 1, b: 1, action: Action.Multiply, expected: 1 },
  { a: 99, b: 99, action: Action.Multiply, expected: 9801 },
  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: -1, b: 1, action: Action.Divide, expected: -1 },
  { a: 0, b: 2, action: Action.Divide, expected: 0 },
  { a: 1, b: 1, action: Action.Divide, expected: 1 },
  { a: 99, b: 9, action: Action.Divide, expected: 11 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 0, b: 1, action: Action.Exponentiate, expected: 0 },
  { a: 1, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 1, b: 1, action: Action.Exponentiate, expected: 1 },
  { a: 9, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
  { a: 1, b: 2, action: 'invalid' as Action, expected: null },
  { a: 5, b: 3, action: 'unknown' as Action, expected: null },
  {
    a: '1' as unknown as number,
    b: '2' as unknown as number,
    action: Action.Add,
    expected: null,
  },
  { a: '1' as unknown as number, b: 2, action: Action.Add, expected: null },
  {
    a: 1,
    b: '2' as unknown as number,
    action: Action.Subtract,
    expected: null,
  },
  {
    a: null as unknown as number,
    b: 2,
    action: Action.Multiply,
    expected: null,
  },
  {
    a: undefined as unknown as number,
    b: 2,
    action: Action.Divide,
    expected: null,
  },
  {
    a: true as unknown as number,
    b: 2,
    action: Action.Exponentiate,
    expected: null,
  },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should handle Actions correctly: a=$a, b=$b, action=$action, expected=$expected',
    ({ a, b, action, expected }) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    },
  );
});
