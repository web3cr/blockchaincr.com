# blockchaincr.com

Static site build with [gaboesquivel/fasthugo](ttps://github.com/gaboesquivel/fasthugo)

## Contents

- [Motivation](#motivation)
- [Features](#features)
- [Directory Structure](#directory-structure)
- [NPM Scripts](#npm-scripts)
- [TODO](#todo)
- [Contributing](#contributing)
- [License](#license)

## Features

- live reload and dev server (hugo)
- sass support with node-sass
- javascript concatenation, minification and obfuscation
- css concatenation, minification and vendor prefixing
- image optimization with imagemin
- lazy load images with jquery.unveil
- automated linting and deployment with travis-ci
- github pages deployment script

## Directory Structure
```
.
├── archetypes              -> Hugo archetypes for the hugo cli
├── content                 -> Markdown files used to generate the site
├── layouts                 -> Hugo html templates for the site generator
├── public                  -> Generated static website
├── static                  -> Generated static files from static-src
├── static-src              -> Sass, JS and image source files
├── config.toml             -> Hugo config file
├── gulpfile.js             -> Gulp build tasks
├── package.json            -> Project metadata and npm scripts
├── LICENSE
└── README.md
```

## NPM Scripts

- `npm start`: generates unobfuscated static files and starts the hugo dev server
- `npm test`: runs standadjs against the javascript files
- `npm run deploy`:  builds and deploys the optimized static site to github pages

read package.json for more details

## TODO

- verify multiplatform support. Tested in Ubuntu Gnome 17.
- automate srcset images for better performance and resolution ( lovell/sharp looks interesting )
- support hugo templates. ( tho it probably makes more sense to add optimizations to hugo itself )
- use webp images in chrome
- pwa features maybe.
- ditch jquery ?

## Contributing

Read the [contributing guidelines](CONTRIBUTING.md) for details.

## License

The MIT License (MIT).
See [LICENSE](https://github.com/gaboesquivel/fasthugo/LICENSE) for more info

---
Made with ♥ by [Gabo Esquivel](https://gaboesquivel.com) and [contributors](https://github.com/blockchaincr/blockchaincr.github.io/graphs/contributors)
