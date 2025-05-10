import { Action, simpleCalculator } from '01-simple-tests';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const cases = [
      { a: 1, b: 2, expected: 3 },
      { a: -1, b: 1, expected: 0 },
      { a: 0, b: 0, expected: 0 },
      { a: 10, b: 10, expected: 20 },
    ];
    cases.forEach(({ a, b, expected }) => {
      const input = { a, b, action: Action.Add };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    });
  });

  test('should subtract two numbers', () => {
    const cases = [
      { a: 2, b: 1, expected: 1 },
      { a: -1, b: 1, expected: -2 },
      { a: 0, b: 0, expected: 0 },
      { a: 20000, b: 1, expected: 19999 },
    ];
    cases.forEach(({ a, b, expected }) => {
      const input = { a, b, action: Action.Subtract };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    });
  });

  test('should multiply two numbers', () => {
    const cases = [
      { a: 2, b: 2, expected: 4 },
      { a: -1, b: 1, expected: -1 },
      { a: 0, b: 0, expected: 0 },
      { a: 1, b: 1, expected: 1 },
      { a: 99, b: 99, expected: 9801 },
    ];
    cases.forEach(({ a, b, expected }) => {
      const input = { a, b, action: Action.Multiply };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    });
  });

  test('should divide two numbers', () => {
    const cases = [
      { a: 4, b: 2, expected: 2 },
      { a: -1, b: 1, expected: -1 },
      { a: 0, b: 2, expected: 0 },
      { a: 1, b: 1, expected: 1 },
      { a: 99, b: 9, expected: 11 },
    ];
    cases.forEach(({ a, b, expected }) => {
      const input = { a, b, action: Action.Divide };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    });
  });

  test('should exponentiate two numbers', () => {
    const cases = [
      { a: 2, b: 3, expected: 8 },
      { a: 0, b: 1, expected: 0 },
      { a: 1, b: 0, expected: 1 },
      { a: 1, b: 1, expected: 1 },
      { a: 9, b: 0, expected: 1 },
      { a: 3, b: 3, expected: 27 },
    ];
    cases.forEach(({ a, b, expected }) => {
      const input = { a, b, action: Action.Exponentiate };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    });
  });

  test('should return null for invalid action', () => {
    const cases = [
      { a: 1, b: 2, action: 'invalid' as Action },
      { a: 5, b: 3, action: 'unknown' as Action },
    ];
    cases.forEach(({ a, b, action }) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBeNull();
    });
  });

  test('should return null for invalid arguments', () => {
    const cases = [
      {
        a: '1' as unknown as number,
        b: '2' as unknown as number,
        action: Action.Add,
      },
      { a: '1' as unknown as number, b: 2, action: Action.Add },
      { a: 1, b: '2' as unknown as number, action: Action.Subtract },
      { a: null as unknown as number, b: 2, action: Action.Multiply },
      { a: undefined as unknown as number, b: 2, action: Action.Divide },
      { a: true as unknown as number, b: 2, action: Action.Exponentiate },
    ];
    cases.forEach(({ a, b, action }) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBeNull();
    });
  });
});
