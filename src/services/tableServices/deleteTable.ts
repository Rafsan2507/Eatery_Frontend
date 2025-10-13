import axios from "axios";
import { getToken } from "../tokenServices";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;
const deleteTable = async (tableNumber: number) => {
  const response = await axios.delete(
    `${baseUrl}/tablePOS/delete/${tableNumber}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return response.data;
};

export default deleteTable;
