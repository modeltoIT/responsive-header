import type { NavItem } from '../../types/navigation.interface.ts';

export const navItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'about',
    label: 'About us',
    href: '/about',
  },
  {
    id: 'services',
    label: 'Services',
    children: [
      { id: 'service1', label: 'Service 1', href: '/services/1' },
      { id: 'service2', label: 'Service 2', href: '/services/2' },
      { id: 'service3', label: 'Service 3', href: '/services/3' },
    ],
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    href: '/testimonials',
  },
];
