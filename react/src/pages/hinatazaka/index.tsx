import { Box, Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import Layout from '../../components/Layout';
import HinatazakaMemberForm from '../../redux/hinatazaka/HinatazakaMemberForm';
import HinatazakaMembersList from '../../redux/hinatazaka/HinatazakaMembersList';

const IndexPage: React.FC = () => (
  <Layout title="日向坂メンバー | Next.js + TypeScript Example">
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xl={12} xs={12}>
          <Paper>
            <Box p={2}>
              <HinatazakaMembersList />
            </Box>
          </Paper>
        </Grid>
        <Grid item xl={12} xs={12}>
          <Paper>
            <Box p={2}>
              <HinatazakaMemberForm />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

export default IndexPage;
