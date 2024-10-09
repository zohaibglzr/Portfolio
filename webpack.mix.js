// const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .vue() // Add this line to enable Vue Loader
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
    ]);
