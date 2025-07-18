// src/styled-components.d.ts
import 'styled-components';
import { theme } from './styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-object-type */
  export interface DefaultTheme extends Theme {}
}
