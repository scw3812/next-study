import type { GetStaticProps, NextPage } from 'next';
import Layout from 'src/components/Layout';
import axios from 'axios';

interface HomeProps {
  dateTime: string;
}

const Home: NextPage<HomeProps> = ({ dateTime }) => {
  return (
    <Layout>
      <p>{dateTime}</p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_HOST_URL);

  return { props: { dateTime: res.data.datetime } };
};

export default Home;
