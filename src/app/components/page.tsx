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
  NoteListItem,
  NoteList,
} from "@/module/List/List";
import { CodeBlock } from "@/module/CodeBlock/CodeBlock";

import { LinkBlock } from "@/module/Link/Link";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="Header">
        <h1 style={{ textAlign: "center", marginBottom: "80px" }}>
          コンポーネント集
        </h1>
        <div className="l-components">
          <Headding1>Headding1</Headding1>
          <CodeBlock>{"<Headding1>Headding1</Headding1>"}</CodeBlock>
        </div>
        <div className="l-components">
          <Headding2>Headding2</Headding2>
          <CodeBlock>{`<Headding2>Headding2</Headding2>`}</CodeBlock>
        </div>
        <div className="l-components">
          <HeaddingUnderLine2>Headding2</HeaddingUnderLine2>
          <CodeBlock>
            {"<HeaddingUnderLine2>Headding2</HeaddingUnderLine2>"}
          </CodeBlock>
        </div>
      </section>
      <section id="Text">
        <Headding1>Text</Headding1>
        <div className="l-components">
          <p className="c-txt">
            ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
          </p>
          <CodeBlock>
            {`<p className="c-txt">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</p>`}
          </CodeBlock>
          <p className="c-txt">
            <Link href={"/"}>ダミーテキスト</Link>
            ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
          </p>
          <CodeBlock>
            {`<p className="c-txt"><Link href={"/"}>ダミーテキスト</Link>ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</p>`}
          </CodeBlock>
          <p className="c-txt u-red u-bold">
            ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
          </p>
          <CodeBlock>
            {`<p className="c-txt u-red u-bold">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</p>`}
          </CodeBlock>
        </div>
        <div className="l-components">
          <LinkBlock param={{ href: "#" }}>ダミーテキスト</LinkBlock>
          <CodeBlock>
            {`<LinkBlock param={{ href: "#" }}>ダミーテキスト</LinkBlock>`}
          </CodeBlock>
          <LinkBlock param={{ href: "#", blank: true }}>
            ダミーテキスト
          </LinkBlock>
          <CodeBlock>
            {`<LinkBlock param={{ href: "#", blank: true }}>ダミーテキスト</LinkBlock>`}
          </CodeBlock>
        </div>
      </section>
      <section id="List">
        <Headding1>List</Headding1>
        <div className="l-components">
          <NumericList>
            <ListItem param={{ modifier: ["bold"] }}>ダミーテキスト</ListItem>
            <ListItem>ダミーテキスト</ListItem>
            <ListItem>ダミーテキスト</ListItem>
          </NumericList>
          <CodeBlock>
            {`<NumericList>\n  <ListItem param={{ modifier: ["bold"] }}>ダミーテキスト</ListItem>\n  <ListItem>ダミーテキスト</ListItem>\n  <ListItem>ダミーテキスト</ListItem>\n</NumericList>`}
          </CodeBlock>
        </div>
        <div className="l-components">
          <List>
            <ListItem param={{ modifier: ["bold", "red"] }}>
              ダミーテキスト
            </ListItem>
            <ListItem>ダミーテキスト</ListItem>
            <ListItem>ダミーテキスト</ListItem>
          </List>
          <CodeBlock>
            {`<List>\n  <ListItem param={{ modifier: ["bold", "red"] }}>ダミーテキスト</ListItem>\n  <ListItem>ダミーテキスト</ListItem>\n  <ListItem>ダミーテキスト</ListItem>\n</List>`}
          </CodeBlock>
        </div>
        <div className="l-components">
          <WarningList>
            <WarningListItem>ダミーテキスト</WarningListItem>
          </WarningList>
          <CodeBlock>
            {`<WarningList>\n  <WarningListItem>ダミーテキスト</WarningListItem>\n</WarningList>`}
          </CodeBlock>
        </div>
        <div>
          <NoteList>
            <NoteListItem>ダミーテキスト</NoteListItem>
          </NoteList>
          <CodeBlock>
            {`<NoteList>\n  <NoteListItem>ダミーテキスト</NoteListItem>\n</NoteList>`}
          </CodeBlock>
        </div>
      </section>
    </>
  );
}
