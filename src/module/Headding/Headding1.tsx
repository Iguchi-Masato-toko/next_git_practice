import { ReactNode } from "react";
import styles from "./style/headding.module.css";

const Headding1 = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className={styles["c-heading1"]}>
      <span className={styles["c-heading__txt"]}>{children}</span>
    </h1>
  );
};

export { Headding1 };
