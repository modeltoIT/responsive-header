import React, {
  type FC,
  type MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import type { NavItem } from '../../types/navigation.interface.ts';
import { ChevronIcon as Chevron } from '../../assets';

interface Props {
  items: NavItem[];
  headerName: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isDesktopMenu?: boolean;
}

const ToggleMenuContainer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 1rem;
  transition: max-height 300ms ease-in-out;
  max-height: ${({ $isOpen }) => ($isOpen ? '30rem' : '2.6rem')};

  overflow: hidden;
`;

const ToggleButton = styled.button`
  position: relative;
  z-index: 20;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 0;
  border: none;
  background-color: white;

  cursor: pointer;
`;

const HeaderText = styled.span``;

const ChevronIcon = styled(Chevron)<{
  $isOpen: boolean;
  $width: number;
  $height: number;
}>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ height }) => `${height}px`};
  margin-top: 1px;
  
  transition: transform 300ms ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(0)' : 'rotate(180deg)')}}
`;

const NavigationList = styled.ul<{ $isOpen: boolean }>`
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

export const ToggleMenu: FC<Props> = ({
  items,
  headerName,
  onClick,
  isDesktopMenu,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropDownBtn = useRef<HTMLButtonElement | null>(null);
  const dropDownList = useRef<HTMLUListElement | null>(null);

  const toggleDropDown: MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();
    e.preventDefault();

    if (isOpen) {
      setIsOpen(false);

      return;
    }

    if (!isOpen) {
      if (dropDownList.current) {
        dropDownList.current.focus({ preventScroll: true });
      }

      setIsOpen(true);
    }
  };

  const onBlurHandler: EventListener = e => {
    const target = e.target as HTMLElement;

    if (
      !dropDownBtn.current?.contains(target) &&
      !dropDownList.current?.contains(target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isDesktopMenu) document.addEventListener('click', onBlurHandler);

    return () => {
      if (isDesktopMenu) document.removeEventListener('click', onBlurHandler);
    };
  }, [isDesktopMenu]);

  return (
    <ToggleMenuContainer $isOpen={isOpen}>
      <NavLink
        ref={dropDownBtn}
        as={ToggleButton}
        aria-label={isOpen ? 'Open services' : 'Close services'}
        onClick={toggleDropDown}
      >
        <HeaderText>{headerName}</HeaderText>
        <ChevronIcon
          $isOpen={isOpen}
          $width={9}
          $height={6}
        />
      </NavLink>

      <NavigationList
        ref={dropDownList}
        tabIndex={-1}
        $isOpen={isOpen}
      >
        {items.map(item => (
          <ListItem key={item.id}>
            <NavLink
              href={item.href}
              onClick={onClick}
            >
              {item.label}
            </NavLink>
          </ListItem>
        ))}
      </NavigationList>
    </ToggleMenuContainer>
  );
};
