import React from "react";
import Link from "next/link";
import Styles from "./styled";

export default () => {
  const navItems = [
    { name: "Design", path: "/portfolio" },
    { name: "Dev", path: "/dev" },
    { name: "Lab", path: "/lab" },
    { name: "About", path: "/about" },
    // { name: "Blog", path: "/blog" },
  ];
  return (
    <Styles>
      {navItems.map(({ name, path }) => (
        <Link href={path}>
          <a>{name}</a>
        </Link>
      ))}
    </Styles>
  );
};
