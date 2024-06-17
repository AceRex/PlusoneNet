import React from "react";

const Row = ({ children, className }) => {
  const NoOfChildren = React.Children.count(children);

  const getGridColsClass = (count) => {
    switch (count) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-4";
      default:
        return "grid-cols-5";
    }
  };

  const gridColsClass = getGridColsClass(NoOfChildren);

  return (
    <div
      className={`bg-none grid grid-flow-row gap-4 text-neutral-600 ${gridColsClass} max-md:grid-cols-1 px-12 py-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Row;
