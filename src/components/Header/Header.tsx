import { useState } from 'react';
import styled from 'styled-components';

import { CloseMenuIcon, HamburgerMenuIcon } from '../../assets';
import logoIcon from '../../assets/logo.png';

import { MobileMenu } from '../MobileMenu';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding['header-small']};

  background-color: ${({ theme }) => theme.colors.secondary};
`;

const LogoIcon = styled.img`
  position: relative;
  top: 0.4rem;

  height: 3.5rem;
  width: 7.5rem;
`;

const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <LogoIcon
          src={logoIcon}
          alt="Company Logo"
        />

        <MenuButton
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <CloseMenuIcon
              width={40}
              height={30}
            />
          ) : (
            <HamburgerMenuIcon
              width={40}
              height={22}
            />
          )}
        </MenuButton>
      </HeaderContainer>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        closeMobileMenu={closeMenu}
      />
    </>
  );
};
