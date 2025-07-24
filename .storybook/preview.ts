import { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/components/Themes'
import GlobalStyles from '../src/styles/global'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: withThemeFromJSXProvider({
    themes: { light: theme },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
}

export default preview
