import Link from "next/link";
import styles from "./style/card.module.css";
import Image from "next/image";

const cardItems = [
  {
    href: "/",
    category: "社会",
    title: "ダミータイトル",
    text: "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
    date: "2026-04-08",
  },
  {
    href: "/",
    category: "医療",
    title: "ダミータイトル2",
    text: "ダミーテキストダミーテキストダミーテキスト",
    date: "2026-04-09",
  },
  {
    href: "/",
    category: "社会",
    title: "ダミータイトル3",
    text: "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
    date: "2026-04-10",
  },
];

const Card = () => {
  return (
    <ul className={styles["c-card"]}>
      {cardItems.map((item, index) => (
        <li key={index} className={styles["c-card__item"]}>
          <Link href={item.href} className={styles["c-card__link"]}>
            <figure className={styles["c-card__figure"]}>
              <Image
                alt="ダミー画像"
                src={"/dummy.png"}
                width={400}
                height={250}
                className={styles["c-card__image"]}
              />
            </figure>
            <div className={styles["c-card__body"]}>
              <span className={styles["c-card__category"]}>{item.category}</span>
              <h3 className={styles["c-card__title"]}>{item.title}</h3>
              <p className={styles["c-card__text"]}>{item.text}</p>
              <time dateTime={item.date} className={styles["c-card__date"]}>
                {item.date}
              </time>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { Card };
