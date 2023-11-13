import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ApiService = async (key: string, url: string) => {
  console.log('ApiService invoked', key, url);
  const response = useQuery({
    queryKey: [key],
    queryFn: async () => axios.get(url)
  });
  return response;
};

export default ApiService;
