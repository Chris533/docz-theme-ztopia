import React, {
  FunctionComponent,
  createContext,
  useState,
  useContext,
} from 'react';
import { theme, ComponentsProvider } from 'docz';

import {
  Paragraph,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Link,
  ThematicBreak,
  InlineCode,
  PreformattedText,
  OrderedList,
  UnorderedList,
  Blockquote,
  Table,
  Props,
  Page,
  NotFound,
  Loader,
} from './components';

// Import global style
import 'normalize.css';
import './styles/global.css';

export const ThemeContext = createContext({
  theme: 'light',
  switchTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const Theme: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
      }}
    >
      <ComponentsProvider
        components={{
          p: Paragraph,
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
          a: Link,
          hr: ThematicBreak,
          inlineCode: InlineCode,
          pre: PreformattedText,
          ol: OrderedList,
          ul: UnorderedList,
          blockquote: Blockquote,
          table: Table,
          props: Props,
          page: Page,
          notFound: NotFound,
          loading: Loader,
        }}
      >
        {children}
      </ComponentsProvider>
    </ThemeContext.Provider>
  );
};

/**
 * This theme configuration will be merged with `themeConfig` setting in the `doczrc.js` project configuration
 */
const defaultThemeConfig = {
  showPlaygroundEditor: true,
  editorMaxLines: 20,
  /**
   * Customize codemirror theme
   * Available themes: https://codemirror.net/theme/
   */
  codemirrorTheme: 'monokai',
  colors: {
    blackLight: '#242635',
    black: '#151725', // page background (dark)
    blackDark: '#0e1019', // text
    whiteLight: '#fcfcfd', // text
    white: '#F8F8F9', // page background (light)
    whiteDark: '#f4f4f5',
    grey: '#c0c5ce', // table border
    primaryLight: '#d9eaff', // sidebar menu item (hovered)
    primary: '#006fff', // brand, link
    primaryDark: '#0058cc', // link (hovered)
    secondary: '#62ddbd',
    highlight: '#ec5564', // matched search query
  },
  fonts: {
    body: 'Lato, sans-serif',
    title: 'Oswald, sans-serif',
  },
  logo: {
    src: null,
    width: 40,
  },
};

export default theme(defaultThemeConfig)(Theme);
