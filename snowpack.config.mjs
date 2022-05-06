export default {
  mount: {
    public: { url: '/', static: true,resolve: true },
    src: { url: '/dist' },
  },
  alias :{
    kll:'./src/kll',
    io:'io'
  },
  optimize: {
    minify: true,
    target: 'es2018',
  },
  devOptions: {
    out: '/dist',
    /* ... */
  },
  buildOptions: {
    sourcemap: true
  },
  plugins: ['@snowpack/plugin-dotenv']
};
