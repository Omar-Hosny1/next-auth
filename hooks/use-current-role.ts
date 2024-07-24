import { useUser } from './use-user';

export const useCurrentRole = () => {
  const user = useUser();
  return user?.role;
};
