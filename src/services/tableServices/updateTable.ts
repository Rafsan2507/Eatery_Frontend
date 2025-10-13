import axios from "axios";
import { getToken } from "../tokenServices";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;
const updateTable = async (tableData: {}) => {
  const response = await axios.put(
    `${baseUrl}/tablePOS/updateTable`,
    tableData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return response.data;
};
export default updateTable;
