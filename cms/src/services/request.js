import axios from "axios";
import setting from "./settings.js";

const instance = axios.create({
  baseURL: setting.BASE_URL,
});

export default instance;
