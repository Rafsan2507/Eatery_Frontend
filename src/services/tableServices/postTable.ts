import axios from "axios";
import { getToken } from "../tokenServices";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;
const postTable = async (tableData: {}) => {
  const response = await axios.post(`${baseUrl}/tablePOS/add`, tableData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return response.data;
};
export default postTable;
