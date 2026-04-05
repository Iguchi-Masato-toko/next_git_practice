import { Headding1 } from "@/module/Headding/Headding1";
import { HeaddingUnderLine2 } from "@/module/Headding/Headding2";
import { NumericList, List, ListItem } from "@/module/List/List";

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
      <NumericList>
        <ListItem param={{ modifier: ["bold"] }}>ダミーテキスト</ListItem>
        <ListItem>ダミーテキスト</ListItem>
        <ListItem>ダミーテキスト</ListItem>
      </NumericList>
      <List>
        <ListItem param={{ modifier: ["bold"] }}>ダミーテキスト</ListItem>
        <ListItem>ダミーテキスト</ListItem>
        <ListItem>ダミーテキスト</ListItem>
      </List>
    </section>
  );
}
