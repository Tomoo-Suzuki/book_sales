import React from "react";
class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <div>Logo-BookUpload</div>
          <div>
            <label>
              <input type="text" />
              <button>検索</button>
            </label>
          </div>
          <div>logo-BookSales</div>
          <div>logo-BookRead</div>
        </div>
        <div>
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
        <nav>
          <div>
            <ul>
              <li>男性コミック</li>
              <li>女性コミック</li>
              <li>BLコミック（ボーイズラブ）</li>
              <li>小説・文芸</li>
              <li>ビジネス・実用 等</li>
              <li>その他すべて</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>異世界ファンタジー</li>
              <li>現代ファンタジー</li>
              <li>BL</li>
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
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
