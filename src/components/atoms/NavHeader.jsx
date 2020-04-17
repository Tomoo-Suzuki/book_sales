import React from "react";
import "_scss/atoms/_navHeader";

export default function NavHeader(props) {
  return (
    <nav className="nav_header">
      <ul>
        <li>異世界ファンタジー</li>
        <li>現代ファンタジー</li>
        <li>SF</li>
        <li>恋愛</li>
        <li>ラブコメ</li>
        <li>現代ドラマ</li>
        <li>ホラー</li>
        <li>ミステリー</li>
        <li>エッセイ・ノンフィクション</li>
        <li>歴史・時代・伝記</li>
        <li>創作論・評論</li>
        <li>詩・童話・その他</li>
      </ul>
    </nav>
  );
}
