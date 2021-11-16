import axios from "axios";

export default {
  getResults: () => {
    return axios.get("/api/genders");
  }
};
