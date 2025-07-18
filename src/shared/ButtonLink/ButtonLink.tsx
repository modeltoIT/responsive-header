import styled from 'styled-components';
import React, { type FC, type ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  $bgColor?: 'primary' | 'secondary';
}

const StyledLink = styled.a<Pick<Props, '$bgColor'>>`
  box-sizing: border-box;
  display: inline-block;
  padding: ${({ theme }) => theme.padding.linkBtn};

  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, $bgColor = 'primary' }) =>
    theme.colors[$bgColor]};
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSizes.btn};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: ${({ theme }) => theme.lineHeight.md};
  text-decoration: none;
  color: ${({ theme, $bgColor = 'primary' }) =>
    theme.colors[$bgColor === 'primary' ? 'secondary' : 'primary']};
`;

export const ButtonLink: FC<Props> = ({
  href,
  children,
  onClick,
  $bgColor,
}) => {
  return (
    <StyledLink
      href={href}
      onClick={onClick}
      $bgColor={$bgColor}
    >
      {children}
    </StyledLink>
  );
};
