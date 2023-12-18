import axios, { AxiosResponse } from 'axios';
import { apiClient } from '@/utils/apiClient';

interface Response {
  token: string;
  success: boolean;
  message: string;
}

type User = {
  user: string;
  password: string;
};

const getToken = async (user: User): Promise<string> => {
  const { user: _user, password } = user;
  if (!_user || !password) {
    return '';
  }
  const headers = {
    Authorization: `Basic ${_user}|${password}`,
  };
  const response: AxiosResponse = await apiClient.get('/account/authenticate', {
    headers,
  });
  return response?.data?.token || '';
};

export const authUser = async (user: User): Promise<Response> => {
  const FailedResponse: Response = {
    token: '',
    success: false,
    message: 'Error al realizar la autenticación',
  };

  try {
    const { user: _user, password } = user;
    if (!_user || !password) {
      return FailedResponse;
    }

    const token = await getToken(user);
    if (!token || token === '') {
      return FailedResponse;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const response: AxiosResponse = await apiClient.get(
      '/account/getuserconfig',
      config
    );

    if (response.status === 200) {
      return {
        token,
        success: true,
        message: 'Autenticación exitosa',
      };
    }

    return FailedResponse;
  } catch (error) {
    console.log(error);
    return FailedResponse;
  }
};
