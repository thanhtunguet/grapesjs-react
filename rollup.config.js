import rollupTypescript from "rollup-plugin-typescript";
import rollupSourceMap from "rollup-plugin-sourcemaps";

export default {
  input: "./src/grapesjs-react.tsx",
  output: {
    format: "cjs",
    file: "./dist/grapesjs-react.js",
  },
  external: [
    'react',
    'grapesjs',
    'grapesjs-mjml',
    'grapesjs-preset-newsletter',
    'grapesjs-preset-webpage',
  ],
  plugins: [
    rollupTypescript(),
    rollupSourceMap(),
  ],
};
