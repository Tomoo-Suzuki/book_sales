import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import updateFormSelf from "_lib/updateFormSelf";

const userSelector = (state) => state.account.user;

const Purpose = (props) => {
  const { val, updateForm } = props;
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  return (
    <dl>
      <dt>ご利用目的</dt>
      {props.status === 0 && (
        <dd className="radioAndCheckbox">
          <label>
            <span>小説の投稿</span>
            <input
              id="upload"
              type="checkbox"
              name="purpose"
              value={1}
              checked={Number(user.purpose) === 1}
              onChange={(e) => updateFormSelf(e, dispatch)}
            />
          </label>
          <label>
            <span>本を読みたい</span>
            <input
              id="read"
              type="checkbox"
              name="purpose"
              value={2}
              checked={Number(user.purpose) === 2}
              onChange={(e) => updateFormSelf(e, dispatch)}
            />
          </label>
          <label>
            <span>本を買いたい</span>
            <input
              id="buy"
              type="checkbox"
              name="purpose"
              value={3}
              checked={Number(user.purpose) === 3}
              onChange={(e) => updateFormSelf(e, dispatch)}
            />
          </label>
          <label>
            <span>本を売りたい</span>
            <input
              id="sell"
              type="checkbox"
              name="purpose"
              value={4}
              checked={Number(user.purpose) === 4}
              onChange={(e) => updateFormSelf(e, dispatch)}
            />
          </label>
          <label>
            <span>その他</span>
            <input
              id="other"
              type="checkbox"
              name="purpose"
              value={5}
              checked={Number(user.purpose) === 5}
              onChange={(e) => updateFormSelf(e, dispatch)}
            />
          </label>
        </dd>
      )}
      {props.status === 1 && (
        <dd>
          <span>{user.purpose}</span>
        </dd>
      )}
    </dl>
  );
};
export default Purpose;
