import * as React from "react";
import * as Redux from "react-redux";

import Navigation from "_components/organisms/Navigation";
import { Helmet } from "react-helmet";

import Name from "_components/atoms/formParts/Name";
import NameKana from "_components/atoms/formParts/NameKana";
import Address from "_components/atoms/formParts/Address";
import Tel from "_components/atoms/formParts/Tel";
import Email from "_components/atoms/formParts/Email";
import Gender from "_components/atoms/formParts/Gender";
import Purpose from "_components/atoms/formParts/Purpose";
import Birthday from "_components/atoms/formParts/Birthday";
import ReceptionDate from "_components/atoms/formParts/ReceptionDate";
import BtnPost from "_components/atoms/submitBtn/form/BtnPost";
import ProgressTracker from "_components/atoms/ProgressTracker";

//import moment from "moment";

import { insertAccount } from "_queries/mutation/insertAccount";
import { updateAccount } from "_queries/mutation/updateAccount";
import {
  insert_account,
  set_form_status,
  form_validate,
} from "_redux/actions/action";

import { selectAccount } from "_queries/query/selectAccount";

import initialStateAccount from "_redux/state/initialStateAccount";

import { validator } from "_lib/validate/";

import { InterfaceUser } from "../types/InterfaceUser";

import "_scss/index";

const txtArray = ["入力・編集", "確認", "完了"];

//TODO input-txt, onChangs, value属性に値を設定すると、１文字目確定問題。

interface Props {
  account: {
    flag: boolean;
    user: InterfaceUser;
    msg: {};
  };
  ui: {
    status_form: number;
  };
}

interface State {}

// class FormAccount extends React.Component<Props, State> {
class FormAccount extends React.Component<Props, State> {
  email: string = "";
  flag_validate: boolean = false;
  allflags: number | string | boolean | null = null;
  constructor(props: Props) {
    super(props);
    //const today = moment().format("YYYY年MM月DD日");
    this.submitFormData = this.submitFormData.bind(this);
    this.validate = this.validate.bind(this);
    this.allValidateConfirm = this.allValidateConfirm.bind(this);
    this.progressStatus = this.progressStatus.bind(this);
    this.email = "rryuusei_y@gmail.com";
    this.props.dispatch(set_form_status(0));
    //this.flag_validate = false;
    //init form state
    this.props.dispatch(insert_account(initialStateAccount.user));
    if (this.email === "ryuusei_y@gmail.com") {
      selectAccount(this.email, this.props.dispatch);
    }
  }
  validate(e: React.FormEvent<HTMLInputElement>) {
    validator(e, this.props.dispatch);
  }
  progressStatus(status: number) {
    this.props.dispatch(set_form_status(status));
  }
  allValidateConfirm() {
    const flags = this.props.account.flag;
    // const user = this.props.account.user;
    //let allflags = null;
    Object.keys(flags).map((key) => {
      if (!flags[key]) {
        this.allflags -= 1;
        const tempHash: {
          key: string;
          val: any;
        } = { key: "", val: "" };
        tempHash.key = key;
        tempHash.val = "ご選択・ご入力をお願いいたします。";
        this.props.dispatch(form_validate(tempHash));
      } else {
        this.allflags = 0;
      }
    });
    if (this.allflags === 0) {
      this.progressStatus(1);
    }
    console.log(this.allflags);
  }
  submitFormData() {
    if (this.email === "ryuusei_y@gmail.com") {
      //login認証の代わり
      //update
      updateAccount(this.props.account.user, this.props.dispatch);
    } else {
      insertAccount(this.props.account.user, this.props.dispatch);
    }
    this.progressStatus(2);
  }
  render() {
    const error = this.props.account.msg;
    const status = this.props.ui.status_form;

    return (
      <div className="Bookseries">
        <Helmet>
          <title>Book Sell | Account Form</title>
          <meta name="description" content="会員登録フォーム" />
          <meta name="keyword" content="suzuki,book,bookseries, detail" />
        </Helmet>
        <h2 className="ttl_h2">アカウントの登録・修正</h2>
        <Navigation />
        <main className="form-book">
          <ProgressTracker txtArray={txtArray} status={status} />
          {(status === 0 || status === 1) && (
            <form name="accountForm">
              <input type="hidden" name="id_user" value="00003" />
              <ReceptionDate />
              <Name
                validate={(e: React.FormEvent<HTMLInputElement>) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />
              <NameKana
                validate={(e: React.FormEvent<HTMLInputElement>) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />
              <Tel
                validate={(e: React.FormEvent<HTMLInputElement>) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />

              <Email
                validate={(e: React.FormEvent<HTMLInputElement>) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />

              <Address
                validate={(e: React.FormEvent<HTMLInputElement>) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />

              <Gender
                validate={(e: React.FormEvent<HTMLInputElement>) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />

              <Purpose
                validate={(e: React.FormEvent<HTMLInputElement>) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />
              <Birthday
                validate={(e: React.FormEvent<HTMLInputElement>) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />
              {status === 0 && (
                <div className="btnContainer">
                  <BtnPost
                    btnClick={() => this.allValidateConfirm()}
                    btnName="確認する"
                  />
                </div>
              )}
              {status === 1 && (
                <>
                  {" "}
                  <div className="btnContainer">
                    <BtnPost
                      btnClick={() => this.progressStatus(0)}
                      btnName="戻る"
                    />
                    <BtnPost
                      btnClick={this.submitFormData}
                      btnName="送信する"
                    />
                  </div>
                </>
              )}
            </form>
          )}
          {status === 2 && <div>登録いたしました。</div>}
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => {
  return state;
};
export default Redux.connect(mapStateToProps)(FormAccount);
