import axios from "axios";

export default {
  // calls the server's /api/genders endpoint to get all the results
  getResults: () => {
    return axios.get("/api/genders");
  },
  // does a POSt to the /api/vote endpoint of the server to cast a vote
  vote: (vote) => {
    return axios.post("/api/vote", vote)
  }
};
