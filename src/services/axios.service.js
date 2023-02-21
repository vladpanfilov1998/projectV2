import axios from "axios";

import baseURL from "../urls/urls";

export const axiosService = axios.create({baseURL})