export default function fetchBook(url, callBack) {
    //console.log(url);
    fetch(url)
        .then(
            function (res) {
                return res.json();
            }
        )
        .then(
            function (resJson) {
                //console.log(JSON.stringify(resJson));
                /*callClass.setState({
                    items: resJson
                });*/
                callBack(resJson);
                //callClass.items = resJson;
                //console.log(callClass.items);
                //return callClass.state;
            }
        )
    //return;
};