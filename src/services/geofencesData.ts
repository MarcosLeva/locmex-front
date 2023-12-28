import { apiClient } from '@/utils/apiClient';
import { useQuery } from '@tanstack/react-query';

export const getGeofences = async () => {
  try {
    const { data } = await apiClient.post('zona/get', {});
    return data;
  } catch (error) {
    return error;
  }
};

export const useGeofences = () => {
  return useQuery({
    queryKey: ['geocercas'],
    queryFn: getGeofences,
  });
};
