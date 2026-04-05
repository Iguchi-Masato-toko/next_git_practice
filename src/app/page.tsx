import {
  Headding1,
  Headding2,
  HeaddingUnderLine2,
} from "@/module/Headding/Headding";
import {
  NumericList,
  List,
  ListItem,
  WarningList,
  WarningListItem,
} from "@/module/List/List";

export default function Home() {
  return (
    <section>
      <Headding1>Headding1</Headding1>
      <HeaddingUnderLine2 param={{ class: "red" }}>
        Headding1
      </HeaddingUnderLine2>
      <p className="c-txt">
        ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
      </p>
      <p className="c-txt">
        ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
      </p>
      <NumericList>
        <ListItem param={{ modifier: ["bold"] }}>ダミーテキスト</ListItem>
        <ListItem>ダミーテキスト</ListItem>
        <ListItem>ダミーテキスト</ListItem>
      </NumericList>
      <List>
        <ListItem param={{ modifier: ["bold", "red"] }}>
          ダミーテキスト
        </ListItem>
        <ListItem>ダミーテキスト</ListItem>
        <ListItem>ダミーテキスト</ListItem>
      </List>
      <WarningList>
        <WarningListItem>ダミーテキスト</WarningListItem>
      </WarningList>
    </section>
  );
}
