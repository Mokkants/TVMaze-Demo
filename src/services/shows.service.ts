import axios, { AxiosResponse } from 'axios';
import { Show, ShowWrapper } from 'src/types';
import { showApiBase as API } from './apiConfig';

export const searchShowsByTerm = async (term: string): Promise<AxiosResponse<ShowWrapper[]>> => {
  return axios.get<ShowWrapper[]>(`${API}/search/shows?q=${term}`);
};

export const getShowById = async (id: string): Promise<AxiosResponse<Show>> => {
  return axios.get<Show>(`${API}/shows/${id}`);
};
