import React from 'react';
import tw from 'tailwind-styled-components';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <LayoutDiv>
      <Header />
      <main>{props.children}</main>
    </LayoutDiv>
  );
};

const LayoutDiv = tw.div`
  m-5
  p-5
  border
  border-solid
  border-gray-300
`;

export default Layout;
