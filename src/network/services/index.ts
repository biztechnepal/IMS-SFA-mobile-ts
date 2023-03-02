import axios, {AxiosError, AxiosInstance} from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

const client = async () => {
  let axiosInstance: AxiosInstance;
  const tenant = await EncryptedStorage.getItem('subdomain');

  if (tenant) {
    axiosInstance = axios.create({
      baseURL: `https://${tenant}.hpmt.net/api`,
      headers: {
        Accept: 'application/json',
      },
    });

    axiosInstance.interceptors.request.use(
      config => {
        return config;
      },
      (error: any) => error,
    );

    return axiosInstance;
  }
};

// utility function to check if the error is an AxiosError
export const isAxiosError = (error: unknown): error is AxiosError => {
  return axios.isAxiosError(error);
};

export default client;
