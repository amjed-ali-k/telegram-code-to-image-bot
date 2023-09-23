import axios from "axios";

export default function root() {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      // returns png file
      // store file in buffer
      const buffer = Buffer.from(response.data, "binary");
      return buffer;
    })
    .catch((error) => {
      return error;
    });
}
