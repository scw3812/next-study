import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';

const Container = tw.div`
  flex
  flex-col
  bg-red-50
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Container>dsfsdfsd</Container>
    </Container>
  );
};

export default Home;
