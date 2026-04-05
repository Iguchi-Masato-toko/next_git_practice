import { ReactNode } from "react";

const NumericList = ({ children }: { children: ReactNode }) => {
  return <ul className="numelicList">{children}</ul>;
};

const List = ({ children }: { children: ReactNode }) => {
  return <ul className="list">{children}</ul>;
};

const ListItem = ({
  children,
  param,
}: {
  children: ReactNode;
  param?: { bold?: boolean };
}) => {
  const className = param?.bold ? "item --bold" : "item";
  return <li className={className}>{children}</li>;
};

export { NumericList, List, ListItem };
