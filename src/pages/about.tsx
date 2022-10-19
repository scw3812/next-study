import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';

const Container = tw.div`
  flex
  flex-col
  bg-red-50
`;

const About: NextPage = () => {
  return <Container>about</Container>;
};

export default About;
