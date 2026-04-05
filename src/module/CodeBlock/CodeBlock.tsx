"use client";

import { useState } from "react";
import styles from "./style/codeBlock.module.css";

const CodeBlock = ({ children }: { children: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles["c-codeBlock"]}>
      <div className={styles["c-codeBlock__header"]}>
        <span className={styles["c-codeBlock__lang"]}>tsx</span>
        <button className={styles["c-codeBlock__copyBtn"]} onClick={handleCopy}>
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
      <pre className={styles["c-codeBlock__pre"]}>
        <code className={styles["c-codeBlock__code"]}>{children}</code>
      </pre>
    </div>
  );
};

export { CodeBlock };
