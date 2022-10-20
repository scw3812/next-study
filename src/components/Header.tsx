import Link from 'next/link';
import React from 'react';
import tw from 'tailwind-styled-components';

const Header = () => {
  return (
    <div>
      <Link href="/">
        <HeaderAnchor>Home</HeaderAnchor>
      </Link>
      <Link href="/about">
        <HeaderAnchor>About</HeaderAnchor>
      </Link>
    </div>
  );
};

const HeaderAnchor = tw.button`
  mr-4
`;

export default Header;
