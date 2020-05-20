import { lazyForPaint } from 'react-loosely-lazy';
const RelativeFileImportWithBasePath = lazyForPaint(
  () => {
    const resolved = require('./__mocks__/imports/base-path-component');

    const then = fn => fn(resolved);

    return { ...resolved, then };
  },
  {
    ssr: true,
    getCacheId: function () {
      if (require && require.resolveWeak) {
        return require.resolveWeak('./__mocks__/imports/base-path-component');
      }

      return './__mocks__/imports/base-path-component';
    },
    moduleId:
      './src/babel/__tests__/__fixtures__/babel/relative-file-import-with-base-path/__mocks__/imports/base-path-component.js',
  }
);
