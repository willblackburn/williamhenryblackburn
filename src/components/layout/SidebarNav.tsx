'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { PersistentAudioPlayer } from '@/components/audio/PersistentAudioPlayer';
import { homeHref, navigationItems, type NavItem } from '@/data/navigation';
import { useMobileNav } from '@/components/providers/MobileNavProvider';
import { useSidebarCollapse } from '@/hooks/useSidebarCollapse';
import { useTheme } from '@/hooks/useTheme';

function NavIcon({ path }: { path: string }) {
  return (
    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d={path} />
    </svg>
  );
}

function NavLink({
  href,
  label,
  iconPath,
  sub = false,
}: {
  href: string;
  label: string;
  iconPath: string;
  sub?: boolean;
}) {
  const pathname = usePathname();
  const isCurrent = pathname === href || (href !== homeHref && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      className={sub ? 'nav-link nav-link--sub' : 'nav-link'}
      aria-current={isCurrent ? 'page' : undefined}
    >
      <NavIcon path={iconPath} />
      <span className="nav-label">{label}</span>
    </Link>
  );
}

function renderNavItem(item: NavItem, openSubmenus: Record<string, boolean>) {
  if (item.type === 'link') {
    return (
      <li key={item.href}>
        <NavLink href={item.href} label={item.label} iconPath={item.iconPath} />
      </li>
    );
  }

  const submenuOpen = openSubmenus[item.menuId] ?? false;

  return (
    <li className="nav-item-has-submenu" key={item.menuId}>
      <input
        type="checkbox"
        id={item.menuId}
        defaultChecked={submenuOpen}
        key={submenuOpen ? `${item.menuId}-open` : `${item.menuId}-closed`}
      />
      <label htmlFor={item.menuId} className="nav-link">
        <NavIcon path={item.iconPath} />
        <span className="nav-label">{item.label}</span>
      </label>
      <ul className="collapsed-menu">
        {item.children.map((child) => (
          <li key={child.href}>
            <NavLink
              href={child.href}
              label={child.label}
              iconPath={child.iconPath}
              sub
            />
          </li>
        ))}
      </ul>
    </li>
  );
}

export function SidebarNav() {
  const { collapsed, toggle: toggleSidebar } = useSidebarCollapse();
  const { isDark, toggleTheme } = useTheme();
  const { openSubmenus } = useMobileNav();

  return (
    <div className="left" id="site-sidebar-nav">
      <ul className="menu">
        <li className="menu-logo">
          <Link
            href={homeHref}
            className="logo-image"
            aria-label="William Henry Blackburn home"
          >
            <span className="logo-monogram" aria-hidden="true">
              WHB
            </span>
          </Link>
        </li>

        {navigationItems.map((item) => renderNavItem(item, openSubmenus))}

        <li className="menu-footer">
          <div className="coda-audio-light-container">
            <button
              type="button"
              className="sidebar-toggle toggle"
              aria-expanded={!collapsed}
              aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
              onClick={toggleSidebar}
            >
              <svg
                className="sidebar-toggle-icon"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41Z"
                />
              </svg>
            </button>
            <label className="theme-switch" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                checked={isDark}
                onChange={(event) => toggleTheme(event.target.checked)}
              />
              <div className="switch round" />
            </label>
            <PersistentAudioPlayer />
          </div>
        </li>
      </ul>
    </div>
  );
}
