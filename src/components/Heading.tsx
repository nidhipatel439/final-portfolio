import React, { PropsWithChildren } from "react";

const Heading: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="text-3xl my-3 font-bold">{children}</div>;
};

export default Heading;
