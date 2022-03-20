import { Box, Typography } from '@mui/material';

export default function TaskFilters() {
  return (
    <>
      <Box sx={{ pb: 2 }} style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Typography variant="h3" style={{ marginRight: 60 }}>
          Все
        </Typography>
        <Typography variant="h3" style={{ marginRight: 60, color: '#c4c4c4' }}>
          Frontend
        </Typography>
        <Typography variant="h3" style={{ marginRight: 60, color: '#c4c4c4' }}>
          Backend
        </Typography>
        <Typography variant="h3" style={{ color: '#c4c4c4' }}>
          QA
        </Typography>
      </Box>

      <Box sx={{ pb: 5 }} style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Typography variant="h4" style={{ marginRight: 50 }}>
          Все
        </Typography>
        <Typography variant="h4" style={{ marginRight: 50, color: '#c4c4c4' }}>
          Intern
        </Typography>
        <Typography variant="h4" style={{ marginRight: 50, color: '#c4c4c4' }}>
          Junior
        </Typography>
        <Typography variant="h4" style={{ marginRight: 50, color: '#c4c4c4' }}>
          Middle
        </Typography>
        <Typography variant="h4" style={{ color: '#c4c4c4' }}>
          Senior
        </Typography>
      </Box>
    </>
  );
}
