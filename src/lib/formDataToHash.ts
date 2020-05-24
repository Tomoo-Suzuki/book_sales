export default function formDataToHash(form) {
  const formObject = new FormData(form);
  let tempHash = {};
  for (let item of formObject) {
    tempHash[item[0]] = item[1];
  }
  return tempHash
}