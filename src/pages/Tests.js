// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductList } from '../sections/@dashboard/products';
import tasks from '../_mocks_/tasks';

// ----------------------------------------------------------------------

export default function Tests() {
  return (
    <Page title="Тесты">
      <Container maxWidth="xl">
        <Box sx={{ pb: 2 }} style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Typography variant="h3" style={{ marginRight: 60 }}>
            Все
          </Typography>
          <Typography variant="h3" style={{ marginRight: 60 }}>
            Frontend
          </Typography>
          <Typography variant="h3" style={{ marginRight: 60 }}>
            Backend
          </Typography>
          <Typography variant="h3">QA</Typography>
        </Box>

        <Box sx={{ pb: 5 }} style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Typography variant="h4" style={{ marginRight: 50 }}>
            Все
          </Typography>
          <Typography variant="h4" style={{ marginRight: 50 }}>
            Intern
          </Typography>
          <Typography variant="h4" style={{ marginRight: 50 }}>
            Junior
          </Typography>
          <Typography variant="h4" style={{ marginRight: 50 }}>
            Middle
          </Typography>
          <Typography variant="h4">Senior</Typography>
        </Box>

        <ProductList tasks={tasks} />
      </Container>
    </Page>
  );
}
