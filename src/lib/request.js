import axios from "axios";

export default function request(que, type, action, dispatch) {
  const url = "http://localhost:7777/graphql";
  if (type === 1) {
    axios
      .post(url, {
        query: que
      })
      .then(function (res) {
        console.log(JSON.stringify(res.data.data));
        //const param = action(res.data);
        dispatch(action(res.data.data))
      })
      .catch(function (e) {
        console.log("反映テスト01");
        console.log(e);
      });

  } else {
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
}