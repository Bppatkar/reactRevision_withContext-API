import axios from "axios";

const Instance = axios.create({
  baseUrl: "https://fakestoreapi.com",
});

export default Instance;
