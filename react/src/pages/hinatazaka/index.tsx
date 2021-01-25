import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Layout from '../../components/Layout';
import HinatazakaMemberForm from '../../redux/hinatazaka/HinatazakaMemberForm';
import HinatazakaMembersList from '../../redux/hinatazaka/HinatazakaMembersList';

const IndexPage: React.FC = () => (
  <Layout title="日向坂メンバー | Next.js + TypeScript Example">
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xl={12} xs={12}>
          <HinatazakaMembersList />
        </Grid>
        <Grid item xl={12} xs={12}>
          <HinatazakaMemberForm />
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

export default IndexPage;
