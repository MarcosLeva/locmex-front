import { apiClient } from '@/utils/apiClient';
import { useQuery } from '@tanstack/react-query';

export const getMonitor = async () => {
  try {
    const { data } = await apiClient.post('monitor/get', {
      filtros: '',
      FechaModificacion: '',
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const useMonitor = () => {
  return useQuery({
    queryKey: ['monitor'],
    queryFn: getMonitor,
    refetchInterval: 30000,
  });
};
