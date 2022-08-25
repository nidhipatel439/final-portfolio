import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="relative p-3 my-3 lg:mx-20 md:mx-10">{children}</div>;
};

export default Layout;
