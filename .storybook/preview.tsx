import { ThemeProvider } from "@emotion/react";
import { type Preview } from "@storybook/react";
import React from "react";
import { defaultTheme, darkTheme } from "../styles/theme";

const getTheme = (themeName) => {
  if (themeName === "default") {
    return defaultTheme
  }
  return darkTheme
};

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme)
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'default',
      toolbar: {
        title: 'Theme',
        // https://storybook-design-system.netlify.app/?path=/docs/icon--basic
        icon: 'circlehollow',
        items: ['default', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withThemeProvider]
};

export default preview;
