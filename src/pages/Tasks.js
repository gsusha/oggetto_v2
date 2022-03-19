import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Box, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  ProductSort,
  ProductList,
  ProductCartWidget,
  ProductFilterSidebar
} from '../sections/@dashboard/products';
//
import PRODUCTS from '../_mocks_/products';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  return (
    <Page title="Задания">
      <Container>
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

        <ProductList products={PRODUCTS} />
      </Container>
    </Page>
  );
}
