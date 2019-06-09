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
    url: '/admin/Admindashboard',
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
    name: 'Depatment',
    url: '/admin/department',
    icon: 'icon-puzzle'
  },
  {
    name: 'Role',
    url: '/admin/role',
    icon: 'icon-puzzle'
  },
  {
    name: 'Coordinator',
    url: '/admin/coordinator',
    icon: 'icon-puzzle'
  },
  {
    name: 'Program',
    url: '/admin/program',
    icon: 'icon-puzzle'
  }
];
