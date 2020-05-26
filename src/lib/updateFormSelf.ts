import { form_controll } from "_redux/actions/action";

const updateFormSelf = (e, dispatch) => {
  let tempHash = { key: "", val: "" };
  tempHash.key = e.target.name;
  tempHash.val = e.target.value;
  dispatch(form_controll(tempHash));
};

export default updateFormSelf;
