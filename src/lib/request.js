import axios from "axios";
export default function request(que) {
  const url = "http://localhost:7777/graphql";
  axios
    .post(url, {
      query: que
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (e) {
      console.log("反映テスト00");
      console.log(e);
    });
}