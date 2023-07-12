import scss from 'rollup-plugin-scss';

export default {
  input: 'src/App.tsx',
  plugins: [
    scss(),
    // other plugins...
  ],
  output: {
    file: 'dist/bundle.js',
    format: 'iife', // use the appropriate format
  },
};
