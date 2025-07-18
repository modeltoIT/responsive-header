import type { MouseEventHandler } from 'react';

export const useAuthLinks = (onClose?: () => void) => {
  const authoriseUser: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    onClose?.();
  };
  return { onRegister: authoriseUser, onSignIn: authoriseUser };
};
