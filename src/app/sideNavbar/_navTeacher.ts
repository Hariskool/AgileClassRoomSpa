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

export const navItemsTeacher: NavData[] = [
  {
    name: 'Dashboard',
    url: '/Teacher/TeacherDashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'Teacher'
    }
  },
  {
    title: true,
    name: 'Operations'
  },
  {
    name: 'Annoucement',
    url: '/Teacher/Annoucement',
    icon: 'icon-puzzle'
  },
  {
    name: 'Assessment',
    url: '/Teacher/Assessment',
    icon: 'icon-puzzle'
  },
  {
    name: 'Project',
    url: '/Teacher/Project',
    icon: 'icon-puzzle'
  },
  {
    name: 'AssignProject',
    url: '/Teacher/AssignProject',
    icon: 'icon-puzzle'
  },
  {
    name: 'RegisteredStudent',
    url: '/Teacher/GetStudent',
    icon: 'icon-puzzle'
  },
  {
    name: 'Groups',
    url: '/Teacher/Group',
    icon: 'icon-puzzle'
  },

];
