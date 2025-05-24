import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de errores
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Error inesperado";

    toast.error(`❌ ${message}`, {
      position: "top-right",
      autoClose: 3000,
    });

    return Promise.reject(error);
  }
);

export const axiosClient = {
  get: async <T>(url: string): Promise<T> => {
    const res = await axiosInstance.get<T>(url);
    return res.data;
  },

  post: async <T>(url: string, data: unknown): Promise<T> => {
    const res = await axiosInstance.post<T>(url, data);
    toast.success("✅ Registro exitoso");
    return res.data;
  },

  put: async <T>(url: string, data: unknown): Promise<T> => {
    const res = await axiosInstance.put<T>(url, data);
    toast.success("✅ Actualización exitosa");
    return res.data;
  },

  delete: async <T>(url: string): Promise<T> => {
    const res = await axiosInstance.delete<T>(url);
    toast.success("🗑️ Eliminación exitosa");
    return res.data;
  },
};
