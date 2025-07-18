import type { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';

import { Navigation } from '../Navigation';
import { ButtonLink } from '../../shared/ButtonLink';

interface Props {
  isMenuOpen: boolean;
  closeMobileMenu: () => void;
}

const MenuContainer = styled.aside<{ $isOpen: boolean }>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.mobileMenu};

  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};

  transition: transform 300ms ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateY(0)' : 'translateY(-100%)'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`;

const BtnLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) => theme.padding.small};
`;

export const MobileMenu: FC<Props> = ({ isMenuOpen, closeMobileMenu }) => {
  const registerUser: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();

    closeMobileMenu();
  };

  const singInUser: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();

    closeMobileMenu();
  };

  return (
    <MenuContainer $isOpen={isMenuOpen}>
      <Navigation closeMobileMenu={closeMobileMenu} />

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
    </MenuContainer>
  );
};
