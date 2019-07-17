interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItemsCoordinator: NavData[] = [
  {
    name: 'Dashboard',
    url: '/Coordinator/CoordinatorDashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'Coordiantor'
    }
  },
  {
    title: true,
    name: 'Operations'
  },
  {
    name: 'Course',
    url: '/Coordinator/Course',
    icon: 'icon-puzzle'
  },
  {
    name: 'Section',
    url: '/Coordinator/Section',
    icon: 'icon-puzzle'
  },
  {
    name: 'Student',
    url: '/Coordinator/Student',
    icon: 'icon-puzzle'
  },
  {
    name: 'Teacher',
    url: '/Coordinator/Teacher',
    icon: 'icon-puzzle'
  },
  {
    name: 'Enorlment',
    url: '/Coordinator/Enrolment',
    icon: 'icon-puzzle'
  }
];
