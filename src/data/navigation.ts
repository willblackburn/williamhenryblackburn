export type NavIconPath = string;

export type NavLinkItem = {
  type: 'link';
  label: string;
  href: string;
  iconPath: NavIconPath;
};

export type NavSubmenuItem = {
  type: 'submenu';
  label: string;
  iconPath: NavIconPath;
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
    iconPath:
      'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.31 0-6 1.79-6 4v1h12v-1c0-2.21-2.69-4-6-4Z',
  },
  {
    type: 'link',
    label: 'Timeline',
    href: '/timeline',
    iconPath:
      'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z',
  },
  {
    type: 'submenu',
    label: 'Works',
    menuId: 'menu-works',
    pathPrefix: '/works',
    iconPath: 'M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 0h8v8h-8v-8Z',
    children: [
      {
        type: 'link',
        label: 'Photography',
        href: '/works/photography',
        iconPath:
          'M9.5 4 8 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4l-1.5-2H9Zm2.5 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z',
      },
      {
        type: 'link',
        label: 'Paintings',
        href: '/works/paintings',
        iconPath:
          'M12 2a10 10 0 1 0 0 20c1.38 0 1.25-2 0-2h-1a2 2 0 0 1-2-2 2 2 0 0 1 2-2h1.5c.83 0 1.5-.67 1.5-1.5 0-3.86-3.14-7-7-7Z',
      },
      {
        type: 'link',
        label: 'Sketches',
        href: '/works/sketches',
        iconPath:
          'm14.06 4.94-8.12 8.12a3 3 0 0 0-.88 2.12V16h.82a3 3 0 0 0 2.12-.88l8.12-8.12-2.06-2.06ZM19 9.31l-1.41 1.41-2.13-2.12 1.41-1.41L19 9.31Z',
      },
      {
        type: 'link',
        label: 'Architectural',
        href: '/works/architecture',
        iconPath: 'M12 3 2 10v11h20V10L12 3Zm0 2.18 6 4.5V19h-3v-6H9v6H6v-9.32l6-4.5Z',
      },
    ],
  },
  {
    type: 'submenu',
    label: 'Archive',
    menuId: 'menu-archive',
    pathPrefix: '/archive',
    iconPath:
      'M4 4h16v4H4V4Zm0 6h10v10H4V10Zm12 0h4v10h-4V10ZM6 6h2v2H6V6Zm0 4h2v2H6v-2Zm0 4h2v2H6v-2Z',
    children: [],
  },
  {
    type: 'link',
    label: 'Shop',
    href: '/shop',
    iconPath:
      'M7 7V6a5 5 0 0 1 10 0v1h2a1 1 0 0 1 1 1v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a1 1 0 0 1 1-1h2Zm2 0h6V6a3 3 0 0 0-6 0v1Z',
  },
  {
    type: 'link',
    label: 'Contact',
    href: '/contact',
    iconPath:
      'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.99l8 6.99 8-6.99V18H4Z',
  },
];

export const homeHref = '/';
