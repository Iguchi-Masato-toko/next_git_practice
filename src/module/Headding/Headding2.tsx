import { ReactNode } from "react";
import styles from "./style/headding.module.css";

const Headding2 = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className={styles.headding2}>
      <span className={styles.headding_txt}>{children}</span>
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
    ? `${styles.headding2_underline} ${param.class}`
    : styles.headding2_underline;
  return (
    <h2 className={className}>
      <span className={styles.headding_txt}>{children}</span>
    </h2>
  );
};

export { Headding2, HeaddingUnderLine2 };
