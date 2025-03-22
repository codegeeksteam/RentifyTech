import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUser = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isUser, isPending: isUserLoading } = useQuery({
    queryKey: [user?.email, "isUser"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/user/${user?.email}`);
      return res.data?.users;
    },
  });
  return [isUser, isUserLoading];
};

export default useUser;
