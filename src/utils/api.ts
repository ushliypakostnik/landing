// Client
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: '//api...',
  withCredentials: false,
});

const responseBody = (response: AxiosResponse) => response.data;

export const APIService = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getConfig: (): Promise<any> => instance.get('/config').then(responseBody),

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getLocation: (id: string): Promise<any> =>
    instance.get(`/locations/${id}`).then(responseBody),

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getMap: (id: string): Promise<any> =>
    instance.get(`/map/${id}`).then(responseBody),

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postForm: (payload: { nickname: string; phone: string }): Promise<any> => {
    const form = new FormData();
    form.append('nickname', payload.nickname);
    form.append('phone', payload.phone);

    return instance
      .post(`${process.env.VUE_APP_URL}/send`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(responseBody);
  },
};
