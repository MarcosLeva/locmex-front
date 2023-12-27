import { apiClient } from '@/utils/apiClient';
import { useQuery } from '@tanstack/react-query';

export const getUserConfig = async () => {
  try {
    const { data } = await apiClient.get('account/getuserconfig');
    return data;
  } catch (error) {
    return error;
  }
};

export const useGetUserConfig = () => {
  return useQuery({
    queryKey: ['userConfig'],
    queryFn: getUserConfig,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
