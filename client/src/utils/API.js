import axios from "axios";

export default {
  // Gets all mentor
  getMentors: function() {
    return axios.get("/api/mentors");
  },
  // Gets the Mentor with the given id
  getMentor: function(id) {
    return axios.get("/api/mentors/" + id);
  },
  // Deletes the Mentor with the given id
  deleteMentor: function(id) {
    return axios.delete("/api/mentors/" + id);
  },
  // Saves a Mentor to the database
  saveMentor: function(mentorData) {
    return axios.post("/api/mentors", mentorData);
  }
};
