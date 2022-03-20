import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Tests from './pages/Tests';
import Tasks from './pages/Tasks';
import User from './pages/User';
import NotFound from './pages/Page404';
import TaskDetail from './pages/TaskDetail';
import TestDetail from './pages/TestDetail';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <Tests /> },
        { path: 'user', element: <User /> },
        { path: 'tasks', element: <Tasks /> },
        { path: 'app/new', element: <TestDetail /> },
        { path: 'tasks/new', element: <TaskDetail /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
