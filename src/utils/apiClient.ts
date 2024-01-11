import axios from "axios";
import { getCookie } from "cookies-next";

const token = getCookie("token");

export const apiClient = axios.create({
  baseURL: "https://54.214.130.15:8082/api/",
  withCredentials: false,
  headers: {
    hasAuthorization: token ? true : false,
    Authorization: token?.toString(),
  },
});
/*  */
