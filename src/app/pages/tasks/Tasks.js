// material
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';
import { TaskList } from '../../sections/@dashboard/tasks';
//
import tasks from '../../_mocks_/tasks';
import TaskFilters from '../../sections/@dashboard/tasks/TaskFilters';
import AddBtn from '../../components/AddBtn';

// ----------------------------------------------------------------------

export default function Tasks() {
  return (
    <Page title="Задания">
      <Container maxWidth="xl">
        <TaskFilters />

        <TaskList tasks={tasks} />

        <AddBtn />
      </Container>
    </Page>
  );
}
