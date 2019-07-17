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

export const navItemsStudent: NavData[] = [
  {
    name: 'Dashboard',
    url: '/Student/StudentDashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'Student'
    }
  },
  {
    title: true,
    name: 'Operations'
  },
  {
    name: 'Task',
    url: '/Student/Task',
    icon: 'icon-puzzle'
  },
  {
    name: 'Epic',
    url: '/Student/Epic',
    icon: 'icon-puzzle'
  },
  {
    name: 'Sprint',
    url: '/Student/Sprint',
    icon: 'icon-puzzle'
  },
  {
    name: 'GetAnnoucement',
    url: '/Student/GetAnnoucement',
    icon: 'icon-puzzle'
  }
];
