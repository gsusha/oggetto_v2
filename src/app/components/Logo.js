import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <RouterLink to="/admin/test">
      <Box component="img" src="/static/logo.png" sx={{ width: 150, height: 50, ...sx }} />
    </RouterLink>
  );
}
