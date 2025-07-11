import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: ' https://rentify-tech-server.vercel.app'
  baseURL: `https://rentify-tech-server.vercel.app`,
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
