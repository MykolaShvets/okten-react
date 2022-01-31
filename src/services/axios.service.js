import axios from "axios";

import baseCarURL from "../configs/cars.urls";
import basePlaceholderURL from "../configs/placeholder.urls";


export const axiosCarService = axios.create({baseURL: baseCarURL})
export const axiosPlaceholderService = axios.create({baseURL: basePlaceholderURL})

