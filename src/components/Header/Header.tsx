import { useState } from 'react';
import styled from 'styled-components';

import { CloseMenuIcon, HamburgerMenuIcon } from '../../assets';
import logoIcon from '../../assets/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 2.6rem;
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

  return (
    <HeaderContainer>
      <LogoIcon src={logoIcon} />

      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
  );
};
