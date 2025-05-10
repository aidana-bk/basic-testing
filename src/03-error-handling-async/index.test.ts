import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const cases = [1, true, 'hello', { a: 1, b: 2 }, [1, 2, 3]];
    cases.forEach(async (val) => {
      const result = await resolveValue(val);
      expect(result).toBe(val);
    });
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const msg = 'This is an custom error message';
    expect(() => throwError(msg)).toThrow();
    try {
      throwError(msg);
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe(msg);
      }
    }
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow();
    try {
      throwError();
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Oops!');
      }
    }
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(
      'This is my awesome custom error!',
    );
    try {
      throwCustomError();
    } catch (error) {
      expect(error).toBeInstanceOf(MyAwesomeError);
    }
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(
      'This is my awesome custom error!',
    );
    try {
      await rejectCustomError();
    } catch (error) {
      expect(error).toBeInstanceOf(MyAwesomeError);
    }
  });
});

describe('MyAwesomeError', () => {
  test('should create an error with the correct message and name', () => {
    const error = new MyAwesomeError();
    expect(error).toBeInstanceOf(MyAwesomeError);
  });
});
