import { ReactNode } from "react";
import styles from "./style/headding.module.css";

const Headding2 = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className={styles["c-heading2"]}>
      <span className={styles["c-heading__txt"]}>{children}</span>
    </h2>
  );
};

const HeaddingUnderLine2 = ({
  children,
  param,
}: {
  children: ReactNode;
  param?: { class?: string };
}) => {
  const className = param?.class
    ? `${styles["c-heading2--underline"]} ${param.class}`
    : styles["c-heading2--underline"];
  return (
    <h2 className={className}>
      <span className={styles["c-heading__txt"]}>{children}</span>
    </h2>
  );
};

export { Headding2, HeaddingUnderLine2 };
