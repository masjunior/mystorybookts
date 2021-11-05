import '../src/index.css'; //👈 The app's CSS file goes here
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

const customViewports = {
  kindleFire2: {
    name: 'BK Point Mobile SMALL',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
  bkpoint_tablet: {
    name: 'BK Point Tablet',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      // ...MINIMAL_VIEWPORTS,
      // ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
}