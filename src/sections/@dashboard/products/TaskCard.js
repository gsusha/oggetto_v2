import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Card, Link, Stack, Typography } from '@mui/material';

TaskCard.propTypes = {
  task: PropTypes.object
};

export default function TaskCard({ task }) {
  const { name, description } = task;

  return (
    <Card>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" component={RouterLink}>
          <Typography variant="subtitle1" noWrap>
            {name}
          </Typography>
        </Link>
        <Typography variant="subtitle2" noWrap>
          {description}
        </Typography>
      </Stack>
    </Card>
  );
}
