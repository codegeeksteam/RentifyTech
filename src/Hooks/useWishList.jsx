import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useWishList = () => {
  const {loading, user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: wishList = [], refetch } = useQuery({
    queryKey: ["wishList", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/wish?email=${user.email}`);
      return res.data;
    },
  });
  return [wishList, refetch];
};

export default useWishList;