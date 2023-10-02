import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
  ],
};

const pageData = {
  '/index.html': {
    title: 'Main Page',
  },
  '/about-us.html': {
    title: 'About us Page',
  },
};
