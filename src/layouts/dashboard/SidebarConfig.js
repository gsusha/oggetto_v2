// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Тесты',
    path: '/dashboard/app',
    icon: getIcon('bi:list-check')
  },
  {
    title: 'Задания',
    path: '/dashboard/tasks',
    icon: getIcon('gg:edit-black-point')
  },
  {
    title: 'Кандидаты',
    path: '/dashboard/user',
    icon: getIcon('fluent:people-16-regular')
  }
];

export default sidebarConfig;
