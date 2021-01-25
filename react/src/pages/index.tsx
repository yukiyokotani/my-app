import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';

const IndexPage: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Container maxWidth="md">
      <Typography variant="h5">This is my homepage!</Typography>
    </Container>
  </Layout>
);

export default IndexPage;
