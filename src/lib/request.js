import axios from "axios";

export default async function request(que, key, action, dispatch) {
  const url = "http://localhost:7777/graphql";
  axios
    .post(url, {
      query: que
    })
    .then(function (res) {
      const hash = res.data.data[key];
      dispatch(action(hash));
    })
    .catch(function (e) {
      console.log("反映テスト01");
      console.log(e);
    });
}