import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Stack, Typography } from '@mui/material';

TaskCard.propTypes = {
  task: PropTypes.object
};

export default function TaskCard({ task }) {
  const { name, description, topic, level, time } = task;

  return (
    <Card>
      <Link to="#" color="inherit" component={RouterLink} underline="none">
        <Stack
          spacing={2}
          sx={{
            p: 3,
            height: '220px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Typography variant="subtitle1" noWrap>
              {name}
            </Typography>
            {time && (
              <Typography
                variant="subtitle2"
                color="#C4C4C4"
                sx={{ mb: 1 }}
                fontWeight="fontWeightRegular"
              >
                {time}
              </Typography>
            )}
            <Typography variant="subtitle2">{description}</Typography>
          </Box>
          <Box sx={{ justifySelf: 'end', display: 'flex' }}>
            <Typography
              variant="subtitle3"
              sx={{
                background: '#E5E5E5',
                borderRadius: 10,
                pr: 2,
                pl: 2,
                pb: 0.5,
                pt: 0.5,
                mr: 1
              }}
            >
              {topic}
            </Typography>
            <Typography
              variant="subtitle3"
              sx={{
                background: '#E5E5E5',
                borderRadius: 10,
                pr: 2,
                pl: 2,
                pb: 0.5,
                pt: 0.5,
                mr: 1
              }}
            >
              {level}
            </Typography>
          </Box>
        </Stack>
      </Link>
    </Card>
  );
}
