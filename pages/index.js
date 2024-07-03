import Layout from '../components/Layout';
import HoverBox from '../components/HoverBox';
import { Box, Heading } from '@shadcn/ui';

const Home = () => (
  <Layout>
    <Box textAlign="center" p={5}>
      <Heading as="h1" size="2xl">Welcome to CRM</Heading>
      <HoverBox />
    </Box>
  </Layout>
);

export default Home;
