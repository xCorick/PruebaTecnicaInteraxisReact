import axios, { AxiosError } from "axios";
import type { CharacterParams } from "../types/character.type";
import { notification } from "antd";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// Cancela la request anterior cuando entra una nueva

let controller: AbortController | null = null;

 // Request interceptor

API.interceptors.request.use((config) => {
  if (controller) {
    controller.abort();
  }

  controller = new AbortController();
  config.signal = controller.signal;

  return config;
});

 // Response interceptor

API.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {

    if (error.code === "ERR_CANCELED") {
      return Promise.reject(error);
    }

    if (error.response) {
      if (error.response.status === 429) {
        notification.warning({
          title: "Demasiadas peticiones",
          description: "Has hecho demasiadas solicitudes. Espera unos segundos.",
        });
        return Promise.reject(error);
      }

      notification.error({
        title: "Error",
        description: (error.response.data as { error?: string })?.error || "Error del servidor",
      });

      return Promise.reject(error);
    }

    if (error.message === "Network Error") {
      notification.warning({
        title: "Demasiadas peticiones",
        description: "La API bloqueó temporalmente las solicitudes. Intenta más tarde.",
      });
    } else {
      notification.error({
        title: "Error de red",
        description: error.message,
      });
    }

    return Promise.reject(error);
  }
);

export const getCharacters = async (params: CharacterParams) => {
  const response = await API.get("/character", { params });
  return response.data;
};
