import { Headding1 } from "@/module/Headding/Headding1";
import { HeaddingUnderLine2 } from "@/module/Headding/Headding2";

export default function Home() {
  return (
    <section>
      <Headding1>Headding1</Headding1>
      <HeaddingUnderLine2 param={{ class: "red" }}>
        Headding1
      </HeaddingUnderLine2>
      <p className="txt">
        ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
      </p>
      <p className="txt">
        ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
      </p>
      <ul className="numelicList">
        <li className="item --bold">ダミーテキスト</li>
        <li className="item">ダミーテキスト</li>
        <li className="item">ダミーテキスト</li>
      </ul>
      <ul className="list">
        <li className="item --bold">ダミーテキスト</li>
        <li className="item">ダミーテキスト</li>
        <li className="item">ダミーテキスト</li>
      </ul>
    </section>
  );
}
