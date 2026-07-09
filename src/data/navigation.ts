export type NavIconName =
  | 'about'
  | 'timeline'
  | 'works'
  | 'drawing'
  | 'painting'
  | 'photography'
  | 'architecture'
  | 'archive'
  | 'dj-keymer'
  | 'shop'
  | 'contact';

export type NavLinkItem = {
  type: 'link';
  label: string;
  href: string;
  icon: NavIconName;
};

export type NavSubmenuItem = {
  type: 'submenu';
  label: string;
  icon: NavIconName;
  menuId: string;
  pathPrefix: string;
  children: NavLinkItem[];
};

export type NavItem = NavLinkItem | NavSubmenuItem;

export const navigationItems: NavItem[] = [
  {
    type: 'link',
    label: 'about',
    href: '/about',
    icon: 'about',
  },
  {
    type: 'link',
    label: 'Timeline',
    href: '/timeline',
    icon: 'timeline',
  },
  {
    type: 'submenu',
    label: 'Works',
    menuId: 'menu-works',
    pathPrefix: '/works',
    icon: 'works',
    children: [
      {
        type: 'link',
        label: 'Sketches',
        href: '/works/sketches',
        icon: 'drawing',
      },
      {
        type: 'link',
        label: 'Paintings',
        href: '/works/paintings',
        icon: 'painting',
      },
      {
        type: 'link',
        label: 'Photography',
        href: '/works/photography',
        icon: 'photography',
      },
      {
        type: 'link',
        label: 'Architectural',
        href: '/works/architecture',
        icon: 'architecture',
      },
    ],
  },
  {
    type: 'submenu',
    label: 'Archive',
    menuId: 'menu-archive',
    pathPrefix: '/archive',
    icon: 'archive',
    children: [
      {
        type: 'link',
        label: 'D.J. Keymer',
        href: '/archive/dj-keymer',
        icon: 'dj-keymer',
      },
    ],
  },
  {
    type: 'link',
    label: 'Shop',
    href: '/shop',
    icon: 'shop',
  },
  {
    type: 'link',
    label: 'Contact',
    href: '/contact',
    icon: 'contact',
  },
];

export const homeHref = '/';
