import * as React from "react";
import "_scss/atoms/_menuFooter";

export default function MenuFooter(props) {
  return (
    <nav className="menuFooter">
      <ul>
        <li>
          <a href="/">ご利用規約</a>
        </li>
        <li>
          <a href="/">個人情報保護方針</a>
        </li>
        <li>
          <a href="/">特定商取引法に基づく表記</a>
        </li>
        <li>
          <a href="/">企業情報（採用）</a>
        </li>
        <li>
          <a href="/">ヘルプ・お問い合わせ</a>
        </li>
      </ul>
    </nav>
  );
}
