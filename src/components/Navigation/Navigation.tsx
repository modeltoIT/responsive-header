import type { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';

import { ToggleMenu } from '../../shared/ToggleMenu';
import { navItems } from './navigationData.ts';

interface Props {
  closeMobileMenu: () => void;
}

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
  margin: 0;

  list-style: none;
`;

const ListItem = styled.li`
  line-height: ${({ theme }) => theme.lineHeight.lg};
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.text};
`;

export const Navigation: FC<Props> = ({ closeMobileMenu }) => {
  const followLink: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();

    closeMobileMenu();
  };

  return (
    <NavigationList>
      {navItems.map(item => (
        <ListItem key={item.id}>
          {item.children ? (
            <ToggleMenu
              items={item.children}
              headerName={item.label}
              onClick={followLink}
            />
          ) : (
            <NavLink
              href={item.href}
              onClick={followLink}
            >
              {item.label}
            </NavLink>
          )}
        </ListItem>
      ))}
    </NavigationList>
  );
};
