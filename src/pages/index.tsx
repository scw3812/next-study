import type { NextPage } from 'next';
import Link from 'next/link';
import tw from 'tailwind-styled-components';

const Container = tw.div`
  flex
  flex-col
  w-100
  bg-blue-300
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Link href="/about">to About</Link>
    </Container>
  );
};

export default Home;
