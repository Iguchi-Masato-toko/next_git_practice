import { ReactNode } from "react";
import styles from "./style/list.module.css";

const NumericList = ({ children }: { children: ReactNode }) => {
  return <ul className={styles["c-numericList"]}>{children}</ul>;
};

const List = ({ children }: { children: ReactNode }) => {
  return <ul className={styles["c-list"]}>{children}</ul>;
};

const ListItem = ({
  children,
  param,
}: {
  children: ReactNode;
  param?: { modifier?: string[] };
}) => {
  const modifiers = param?.modifier?.map((m) => `u-${m}`).join(" ") ?? "";
  const className = modifiers
    ? `${styles["c-listItem"]} ${modifiers}`
    : styles["c-listItem"];
  return <li className={className}>{children}</li>;
};

/* 赤い警告アイコン付きリスト */
const WarningList = ({ children }: { children: ReactNode }) => {
  return <ul className={styles["c-warningList"]}>{children}</ul>;
};

const WarningListItem = ({ children }: { children: ReactNode }) => {
  return <li className={styles["c-warningList__item"]}>{children}</li>;
};

/* 注釈リスト（modifierオプション付き） */
const NoteList = ({ children }: { children: ReactNode }) => {
  return <ul className={styles["c-noteList"]}>{children}</ul>;
};

const NoteListItem = ({
  children,
  param,
}: {
  children: ReactNode;
  param?: { modifier?: ("small" | "indent")[] };
}) => {
  const baseClass = styles["c-noteList__item"];
  const modifierClasses =
    param?.modifier
      ?.map((m) => styles[`c-noteList__item--${m}`] ?? "")
      .filter(Boolean)
      .join(" ") ?? "";
  const className = modifierClasses
    ? `${baseClass} ${modifierClasses}`
    : baseClass;
  return <li className={className}>{children}</li>;
};

export {
  NumericList,
  List,
  ListItem,
  WarningList,
  WarningListItem,
  NoteList,
  NoteListItem,
};
