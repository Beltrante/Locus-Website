# Locus

*Designand implementation of a website for a tourist office of a cultural tourism destination for the Hypermedia Applications course of Politecnico di Milano.*

## Authors
  + [Alessandro Austoni](https://github.com/AlessandroAustoni)
  + [Matteo Beltrante](https://github.com/Beltrante)
  + [Francesco Bosso](https://github.com/FBosso)
  + [Thomas Martinoli](https://github.com/ThomasMartinoli)

## Project Description
The project consists in the design and the implementation of a website for a tourist office of a cultural tourism destination. The requirements contain some constraints about the content and relationships of the main entities of the website.
The project is divided into three main parts: Design, Backend, Frontend.

### Design
Descrivere cosa abbiamo messo nel design document: C-idm wireframes ecc  
The design document is available [here](insert link here).

### Backend Technologies
-NPM is the Node Package Manager we use in this project. It allows us to download modules and use it in our project.
-NodeJS is used in the implementation to create a fully working Web Server and in order to do so we use a module called express.
-Express is a module providing a flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
-We use a SQL-based language to write queries, particularly, the DB implemented was PostgreSQL. Sequelize is a promise-based Node.js Object–relational mapping tool
for Postgres and other Databases. This tool is imported in our project as a module to make simpler queries.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
