import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';

const IndexPage: React.FC = () => (
  <Layout title="Home | my-app">
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xl={12} xs={12} container justify="center">
          <Typography variant="h1">This is my homepage!</Typography>
        </Grid>
        <Grid item xl={12} xs={12} container justify="center">
          <Typography variant="h5">
            This application is developed by yokotani92 🚀
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

export default IndexPage;
