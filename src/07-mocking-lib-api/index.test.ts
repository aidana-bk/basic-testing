import axios from 'axios';
import { throttledGetDataFromApi, THROTTLE_TIME } from './index';

describe('throttledGetDataFromApi', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    if (typeof throttledGetDataFromApi.cancel === 'function') {
      throttledGetDataFromApi.cancel();
    }
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const mockAxiosCreate = jest.fn().mockReturnValue({
      get: jest.fn().mockResolvedValue({ data: { name: 'Aidana' } }),
    });
    axios.create = mockAxiosCreate;
    await throttledGetDataFromApi('/aidana');
    expect(mockAxiosCreate).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const mockAxiosInstance = {
      get: jest.fn().mockResolvedValue({ data: { name: 'Aidana' } }),
    };
    axios.create = jest.fn().mockReturnValue(mockAxiosInstance);
    await throttledGetDataFromApi('/aidana');
    jest.advanceTimersByTime(THROTTLE_TIME);
    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/aidana');
  });

  test('should return response data', async () => {
    const mockAxiosInstance = {
      get: jest.fn().mockResolvedValue({ data: { name: 'Aidana' } }),
    };
    axios.create = jest.fn().mockReturnValue(mockAxiosInstance);
    const data = await throttledGetDataFromApi('/aidana');
    jest.advanceTimersByTime(THROTTLE_TIME);
    expect(data).toEqual({ name: 'Aidana' });
  });
});
