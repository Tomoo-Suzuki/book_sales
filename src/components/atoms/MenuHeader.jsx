import React from "react";
import "_scss/atoms/_menuHeader";

export default function MenuHeader(props) {
  return (
    <div>
      <div className="menuHeader">
        <ul>
          <li>ご注文履歴・ご返品</li>
          <li>ポイント</li>
          <li>カート</li>
          <li>欲しいものリスト</li>
          <li>マイページ</li>
          <li>ヘルプ</li>
          <li>アカウントサービス</li>
        </ul>
      </div>
    </div>
  );
}
