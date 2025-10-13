import axios from "axios";
import { getToken } from "../tokenServices";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;
const revenueToday = async () => {
  const response = await axios.get(`${baseUrl}/dashboardget/revenueToday`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return response.data;
};
export default revenueToday;
