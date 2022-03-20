import { TextField, ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
import { useState } from 'react';
import { TestCode, TestVariants, TestImage } from '../../sections/@dashboard/tests';

export default function TaskCreate() {
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField
        style={{ marginBottom: 40 }}
        fullWidth
        id="standard-basic"
        label="Название"
        variant="standard"
      />

      <ToggleButtonGroup
        color="primary"
        value={alignment}
        fullWidth
        exclusive
        onChange={handleAlignment}
        style={{ marginBottom: 20 }}
      >
        <ToggleButton value="frontend" style={{ fontWeight: 'normal' }}>
          Frontend
        </ToggleButton>
        <ToggleButton value="backend" style={{ fontWeight: 'normal' }}>
          Backend
        </ToggleButton>
        <ToggleButton value="qa" style={{ fontWeight: 'normal' }}>
          QA
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        color="primary"
        value={alignment}
        fullWidth
        exclusive
        onChange={handleAlignment}
        style={{ marginBottom: 20 }}
      >
        <ToggleButton value="intern" style={{ fontWeight: 'normal' }}>
          Intern
        </ToggleButton>
        <ToggleButton value="junior" style={{ fontWeight: 'normal' }}>
          Junior
        </ToggleButton>
        <ToggleButton value="middle" style={{ fontWeight: 'normal' }}>
          Middle
        </ToggleButton>
        <ToggleButton value="Senior" style={{ fontWeight: 'normal' }}>
          Senior
        </ToggleButton>
      </ToggleButtonGroup>

      <TextField
        id="outlined-basic"
        label="Описание"
        variant="outlined"
        fullWidth
        multiline
        minRows={3}
        maxRows={6}
        style={{ marginBottom: 20 }}
      />

      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        <TestVariants />
        <TestCode />
        <TestImage />
      </Box>
    </div>
  );
}
