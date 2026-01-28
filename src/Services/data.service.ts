import axios from "axios";
import type { CharacterParams } from "../types/character.type";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const getCharacters = async (params: CharacterParams) => {
    const response = await API.get('/character', { params });
    return response.data;
}