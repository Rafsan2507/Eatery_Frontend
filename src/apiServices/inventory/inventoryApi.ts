import { getToken } from "@/services/tokenServices";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

export const getAllWastageItems = async ({
  pageNumber,
  pageSize,
}: {
  pageNumber: number;
  pageSize: number;
}) => {
  const response = await axios.get(
    `${baseUrl}/ingredient/expired-items?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return response.data;
};
