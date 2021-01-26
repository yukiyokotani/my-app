import { Box, Container, Grid, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Layout from '../components/Layout';
import Counter from '../redux/counter/Counter';

const AboutPage: React.FC = () => (
  <Layout title="Counter | my-app">
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xl={12} xs={12}>
          <Paper>
            <Box p={2}>
              <Typography variant="h4" gutterBottom>
                Redux Counter
              </Typography>
              <Counter />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

export default AboutPage;
