import Layout from '../../components/Layout';
import HinatazakaMembers from '../../redux/hinatazaka/HinatazakaMembers';

const IndexPage: React.FC = () => (
  <Layout title="日向坂メンバー | Next.js + TypeScript Example">
    <HinatazakaMembers />
  </Layout>
);

export default IndexPage;
