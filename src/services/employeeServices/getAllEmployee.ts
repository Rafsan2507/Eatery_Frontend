import axios from "axios";
import { getToken } from "../tokenServices";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;
const getAllEmployee = async () => {
  try {
    const response = await axios.get(`${baseUrl}/hr/employee-list`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch event details");
  }
};

export default getAllEmployee;
