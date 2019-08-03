export default function fetchBook(url, callBack) {
    fetch(url)
        .then(
            function (res) {
                return res.json();
            }
        )
        .then(
            function (resJson) {
                callBack(resJson);
            }
        )
};