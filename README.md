# Vanilla Webapp Demo

A vanilla webapp uses just vanilla js and vue lib without any build system

## Favicon

Generate online by tool: https://realfavicongenerator.net/

## Polyfill

Use core-js bundled version: https://github.com/zloirock/core-js

## Nginx setup for SPA

```
location / {
  try_files $uri $uri/ index.html;
}
```

## Framework

https://vuejs.org/

## Router

https://router.vuejs.org/

## Code Structure

```
- main.js             # global state and methods
- components.js       # common re-used components
- pages/layout.js     # layout component
- pages/*.js          # page components
```