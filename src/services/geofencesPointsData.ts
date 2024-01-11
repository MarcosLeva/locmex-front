import { apiClient } from '@/utils/apiClient';
import { useQuery } from '@tanstack/react-query';

export const getGeofencesPoints = async () => {
  try {
    const { data } = await apiClient.post('zonapunto/get', {});
    return data;
  } catch (error) {
    return error;
  }
};

export const useGeofencesPoints = () => {
  return useQuery({
    queryKey: ['geocercasPuntos'],
    queryFn: getGeofencesPoints,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
