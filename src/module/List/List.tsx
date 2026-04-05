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
  param?: { modifier?: string[] };
}) => {
  const modifiers = param?.modifier?.map((m) => `--${m}`).join(" ") ?? "";
  const className = modifiers ? `item ${modifiers}` : "item";
  return <li className={className}>{children}</li>;
};

export { NumericList, List, ListItem };
