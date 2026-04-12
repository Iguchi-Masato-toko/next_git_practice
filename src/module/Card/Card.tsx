import Link from "next/link";
import styles from "./style/card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <ul>
      <li>
        <Link href={"/"}>
          <figure>
            <Image alt="" src={"/dummy.png"} width={300} height={200} />
          </figure>
          <div>
            <span>社会</span>
            <h3>ダミータイトル</h3>
            <p>ダミーテキストダミーテキスト</p>
            <div>
              <span>aaaa</span>
              <time dateTime="2026-04-08">2026-04-08</time>
            </div>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export { Card };
