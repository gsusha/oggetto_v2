import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Tests from './pages/tests/Tests';
import Tasks from './pages/tasks/Tasks';
import User from './pages/User';
import NotFound from './pages/Page404';
import TestCreate from './pages/tests/TestCreate';
import TaskCreate from './pages/tasks/TaskCreate';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/admin',
      element: <DashboardLayout />,
      children: [
        { path: 'test', element: <Tests /> },
        { path: 'user', element: <User /> },
        { path: 'tasks', element: <Tasks /> },
        { path: 'test/new', element: <TestCreate /> },
        { path: 'tasks/new', element: <TaskCreate /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> }
        // {path: '*', element: <Navigate to="/404"/>}
      ]
    }
  ]);
}
