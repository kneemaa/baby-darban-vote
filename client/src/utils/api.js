import axios from "axios";

export default {
  getResults: () => {
    return axios.get("/api/genders");
  },
  vote: (vote) => {
    return axios.post("/api/vote", vote)
  }
};
