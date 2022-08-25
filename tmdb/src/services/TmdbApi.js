import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
