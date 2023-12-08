import axios, { AxiosResponse } from 'axios';

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
  if (user.user === 'admin' && user.password === 'admin') {
    return 'Authorization "9Jv8l8hcPqvpopu1m8ikh9NcjtD+TSfPwy2WTU4GJJg="';
  }
  return '';
};

const getHeaders = (token: string) => {
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const authUser = async (user: User): Promise<Response> => {
  const FailedResponse: Response = {
    token: '',
    success: false,
    message: 'Error al realizar la autenticación',
  };

  try {
    const token = await getToken(user);
    const headers = getHeaders(token);

    const config = {
      headers,
    };

    const response: AxiosResponse = await axios.get(
      'http://54.214.130.15:8082/api/account/authenticate',
      config
    );
    console.log(response);

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
