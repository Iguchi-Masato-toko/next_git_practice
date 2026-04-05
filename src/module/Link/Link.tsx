import Link from "next/link";
import { ReactNode } from "react";
import style from "./style/style.module.css";
// const isExternal = (href?: string) => {
//   if (!href) return false;
//   return /^https?:\/\//i.test(href) || href.startsWith("//");
// };

const LinkBlock = ({
  param,
  children,
}: {
  param?: { href?: string; modifier?: string[]; blank?: boolean };
  children: ReactNode;
}) => {
  const href = param?.href ?? "#";
  const modifiers = param?.modifier?.map((m) => `u-${m}`).join(" ") ?? "";
  const className = modifiers
    ? `${style["c-linkBlock"]} ${modifiers}`
    : style["c-linkBlock"];

  // const external = isExternal(href) || Boolean(param?.blank);
  const external = Boolean(param?.blank);
  const target = external ? "_blank" : undefined;
  const rel = external ? "noopener noreferrer" : undefined;

  if (external) {
    return (
      <a className={className} href={href} target={target} rel={rel}>
        {children}
        {param?.blank && (
          <span className={style["c-link__externalIcon"]} aria-hidden>
            ↗
          </span>
        )}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};

export { LinkBlock };
