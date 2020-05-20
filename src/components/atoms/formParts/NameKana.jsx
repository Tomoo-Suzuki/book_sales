import React from "react";
import { useDispatch, useSelector } from "react-redux";
import updateFormSelf from "_lib/updateFormSelf";

const userSelector = (state) => state.account.user;

const NameKana = (props) => {
  const { val, updateForm, validate, error } = props;
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  return (
    <dl className="require">
      <dt>フリガナ</dt>
      <dd>
        <>
          {props.status === 0 && (
            <div className="form_horizontal">
              <span>
                <input
                  type="text"
                  name="last_name_kana"
                  required
                  pattern="[ァ-ヴー/s ]+"
                  placeholder="ヤマダ"
                  title="カタカナを入力してください"
                  defaultValue={user.last_name_kana}
                  //   value={val.last_name_kana}
                  onChange={(e) => updateFormSelf(e, dispatch)}
                  onBlur={(e) => validate(e)}
                />
              </span>
              <span className="msg">{error.last_name_kana}</span>
            </div>
          )}
          {props.status === 1 && (
            <div className="form_horizontal">
              <span>{user.last_name_kana}</span>
            </div>
          )}
        </>
        <>
          {props.status === 0 && (
            <div className="form_horizontal">
              <span>
                <input
                  type="text"
                  name="first_name_kana"
                  required
                  pattern="[ァ-ヴー/s ]+"
                  placeholder="キョウコ"
                  title="カタカナを入力してください"
                  defaultValue={user.first_name_kana}
                  //   value={val.first_name_kana}
                  onChange={(e) => updateFormSelf(e, dispatch)}
                  onBlur={(e) => validate(e)}
                />
              </span>
              <span className="msg">{error.first_name_kana}</span>
            </div>
          )}
          {props.status === 1 && (
            <div className="form_horizontal">
              <span>{user.first_name_kana}</span>
            </div>
          )}
        </>
      </dd>
    </dl>
  );
};
export default NameKana;
