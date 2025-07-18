import { type MouseEventHandler, useState } from 'react';
import styled from 'styled-components';

import { CloseMenuIcon, HamburgerMenuIcon } from '../../assets';
import logoIcon from '../../assets/logo.png';

import { MobileMenu } from '../MobileMenu';
import { Navigation } from '../Navigation';
import { ButtonLink } from '../../shared/ButtonLink';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
`;

const HeaderDesktop = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    background-color: white;

    padding: ${({ theme }) => theme.padding['header-large']};
    border-bottom: 1px solid #ddd;
  }
`;

const HeaderMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding['header-small']};
  background-color: ${({ theme }) => theme.colors.secondary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
    align-items: center;
    gap: 2rem;
  }
`;

const BtnLinkContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  padding: ${({ theme }) => theme.padding.small};
`;

const LogoIcon = styled.img`
  position: relative;
  top: 0.4rem;

  height: 3.5rem;
  width: 7.5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 4.5rem;
    width: max-content;
  }
`;

const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const registerUser: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
  };

  const singInUser: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <HeaderDesktop>
          <Navigation
            closeMobileMenu={closeMenu}
            isDesktopMenu={true}
          />

          <LogoIcon
            src={logoIcon}
            alt="Company Logo"
          />

          <BtnLinkContainer>
            <ButtonLink
              href={'/'}
              onClick={registerUser}
            >
              Register
            </ButtonLink>

            <ButtonLink
              href={'/'}
              onClick={singInUser}
              $bgColor={'secondary'}
            >
              Sign in
            </ButtonLink>
          </BtnLinkContainer>
        </HeaderDesktop>

        <HeaderMobile>
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
        </HeaderMobile>
      </HeaderContainer>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        closeMobileMenu={closeMenu}
      />
    </>
  );
};
