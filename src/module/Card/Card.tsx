import Link from "next/link";
import styles from "./style/card.module.css";
import Image from "next/image";

type CardItem = {
  href: string;
  category: string;
  title: string;
  text: string;
  date: string;
};

const Card = ({ cardItems }: { cardItems: CardItem[] }) => {
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
              <span className={styles["c-card__category"]}>
                {item.category}
              </span>
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
