import axios from 'axios';
import http from "./http";
export default {
    addRecipe: data => {
        return http.post("add/", data);
    },
     // Gets all saved books
  getSavedBooks: function() {
    return http.get("/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return http.delete("/books/" + id);
  }
};

