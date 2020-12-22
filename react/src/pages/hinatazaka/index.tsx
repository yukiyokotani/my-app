import Layout from '../../components/Layout';
import HinatazakaMember from '../../redux/hinatazaka/HinatazakaMember';

const IndexPage: React.FC = () => (
  <Layout title="日向坂メンバー | Next.js + TypeScript Example">
    <HinatazakaMember />
  </Layout>
);

export default IndexPage;
