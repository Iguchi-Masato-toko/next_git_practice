import { ReactNode } from "react";
import styles from "./style/headding.module.css";

const Headding1 = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className={styles.headding1}>
      <span className={styles.headding1_txt}>{children}</span>
    </h1>
  );
};

export { Headding1 };
