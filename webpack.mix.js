const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.setPublicPath("public/")
    .copy('src/assets/images', 'build/static/images')
    .sass('src/assets/index.scss', 'build/static/css/main.css')
    .options({
       processCssUrls: false,
       postCss: [tailwindcss('./tailwind.config.js')],
       important: true,
    })
   .webpackConfig({
       module: {
           rules: [
               {
                   test: /\.tsx?$/,
                   loader: 'ts-loader',
                   exclude: /node_modules/
               }
           ]
       },
       resolve: {
           extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx']
       }
   })
   .react('src/Index.tsx', 'public/js');


