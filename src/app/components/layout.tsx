import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "コンポーネント集",
  description: "next Practice用のコンポーネント集です",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="l-wrap">{children}</div>
      </body>
    </html>
  );
}
