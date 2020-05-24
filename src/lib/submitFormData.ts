export default submitFormData = function (props) {
  console.log(props);
  const loginForm = document.forms.loginForm;
  const formData = new FormData(loginForm);
  axios.post("/foo", formData);
  // //確認用
  // for (let item of formData) {
  //   console.log(item);
  // }
}