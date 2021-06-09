import axios from 'axios';
import { searchShowsByTerm } from './shows.service';
import { showApiBase as API } from './apiConfig';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('searchShowByTerm', () => {
  it('fetches result on show search', async () => {
    const data = [{ id: 1 }, { id: 2 }];

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(searchShowsByTerm('react')).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(`${API}/search/shows?q=react`);
  });

  it('receives error on failed fetch', async () => {
    const errorMessage = 'Network Error';

    mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(searchShowsByTerm('react')).rejects.toThrow(errorMessage);
  });
});
