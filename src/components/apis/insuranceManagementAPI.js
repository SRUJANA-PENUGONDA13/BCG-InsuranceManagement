import axios from "axios";

export default axios.create({
  baseURL: "https://insurance-management-api.herokuapp.com/",
});
