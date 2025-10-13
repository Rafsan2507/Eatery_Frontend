import axios from "axios";
import { getToken } from "../tokenServices";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;
const revenueSevenDays = async () => {
  const response = await axios.get(`${baseUrl}/dashboardget/revenueSevenDays`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return response.data;
};
export default revenueSevenDays;
