import { Autocomplete, Container, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import tasks from '../../_mocks_/tasks';
import Page from '../../components/Page';
import SuccessBtn from '../../components/SuccessBtn';

export default function TestCreate() {
  const [alignment, setAlignment] = useState('left');
  const [alignment2, setAlignment2] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleAlignment2 = (event, newAlignment2) => {
    setAlignment2(newAlignment2);
  };

  return (
    <Page title="Создание теста">
      <Container>
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
            value={alignment2}
            fullWidth
            exclusive
            onChange={handleAlignment2}
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

          <Autocomplete
            options={tasks}
            getOptionLabel={(option) => option.name}
            fullWidth
            disablePortal
            multiple
            id="tasks"
            renderInput={(params) => <TextField {...params} label="Задания" />}
          />
        </div>

        <SuccessBtn />
      </Container>
    </Page>
  );
}
