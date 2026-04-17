import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="container mx-auto px-3 lg:px-0">{children}</div>;
};

export default Container;
