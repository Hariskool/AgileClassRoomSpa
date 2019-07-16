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

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/Admin/AdminDashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'Admin'
    }
  },
  {
    title: true,
    name: 'Operations'
  },
  {
    name: 'Depatment',
    url: '/Admin/Department',
    icon: 'icon-puzzle'
  },
  {
    name: 'Role',
    url: '/Admin/Role',
    icon: 'icon-puzzle'
  },
  {
    name: 'Coordinator',
    url: '/Admin/Coordinator',
    icon: 'icon-puzzle'
  },
  {
    name: 'Program',
    url: '/Admin/Program',
    icon: 'icon-puzzle'
  }
];
