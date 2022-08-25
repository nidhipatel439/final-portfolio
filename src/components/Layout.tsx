import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="relative p-3 my-3 md:mx-20">{children}</div>;
};

export default Layout;
