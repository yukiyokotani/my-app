import Layout from '../../components/Layout';
import BatmanList from '../../redux/batman/BatmanList';

const IndexPage: React.FC = () => (
  <Layout title="Batman List | Next.js + TypeScript Example">
    <BatmanList />
  </Layout>
);

export default IndexPage;
