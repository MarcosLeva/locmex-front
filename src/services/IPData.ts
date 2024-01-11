import { apiClient } from '@/utils/apiClient';
import { useQuery } from '@tanstack/react-query';

export const getInterestPoints = async () => {
  try {
    const { data } = await apiClient.post('monitor/getinterespoints');
    return data;
  } catch (error) {
    return error;
  }
};

export const useInterestPoints = () => {
  return useQuery({
    queryKey: ['interestpoints'],
    queryFn: getInterestPoints,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
