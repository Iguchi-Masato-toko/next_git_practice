import type { Metadata } from "next";
import "./components.css";

export const metadata: Metadata = {
  title: "コンポーネント集",
  description: "next Practice用のコンポーネント集です",
};

// このレイアウトは components/ ページ専用の枠組みです
// layout.tsx に書いた内容は、children（page.tsx）の外側に常時表示されます
export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* サイドナビ: page.tsx のセクションへのページ内リンク */}
      <aside className="c-components">
        <ul className="c-componentsList">
          <li className="c-componentsList__item">
            <a href="#Header">Header</a>
          </li>
          <li className="c-componentsList__item">
            <a href="#Text">Text</a>
          </li>
          <li className="c-componentsList__item">
            <a href="#List">List</a>
          </li>
          <li className="c-componentsList__item">
            <a href="#Card">Card</a>
          </li>
        </ul>
      </aside>
      {/* children には page.tsx の内容が入る */}
      <main>{children}</main>
    </>
  );
}
