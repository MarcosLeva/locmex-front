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

export const useMonitor = () => {
  return useQuery({
    queryKey: ['interestpoints'],
    queryFn: getInterestPoints,
  });
};
