import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';
import Counter from '../redux/counter/Counter';

const AboutPage: React.FC = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Typography variant="h5">This is Counter page!</Typography>
    <Counter />
  </Layout>
);

export default AboutPage;
