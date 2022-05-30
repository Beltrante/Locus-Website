# Locus

*Design and implementation of a website for a tourist office of a cultural tourism destination for the Hypermedia Applications course of Politecnico di Milano.*

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
+ NPM is the Node Package Manager used in this project to download and manage the rquired modules.
+ NodeJS is used in the implementation to create a fully working Web Server by using the Express module.
+ Express is a module providing a flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
+ PostgreSQL is an open source db used to store the data required to populate the HTML pages
+ Sequelize is a promise-based Node.js Object–relational mapping tool used to make querying the database during API calls easier 

### Frontend Technologies
+ Axios is promise-based HTTP Client for node.js and is used to handle all the requests to the server's API
+ HTML/CSS are used to structure and style the different pages in the website 

### Frameworks 
+ NuxtJS is a framework which allows to create web application utilizing the Vue.js single file component system, allowing for, among others, reduced time to interactivity and improved SEO.

### Design Decisions 
+ Following reusability principles the web site was structured with multiple Dynamic Pages and shared components, like the CardComponent, in order to achieve the least possible amount of repeated code.
+ For the aformentioned principles and to obtain a more uniformed design across the site a default layout was added which included the Header, the Footer, and the BreadCrumbs component 

### Deploy Decisions  
We decided to deploy our project as a Static website using GitHub pages based on the idea that our Art Town's city council would be able to plan its Attractions in advance, allowing the site to be updated no more frequently than every 6 months.
The Static deploy was chosen to guarantee the following benefits:
+ The site does not need a running backend with its corresponding costs.
+ The APIs are only called during the static generation of the site, thus no malicius or malformed request needs to be accounted for, making the site more secure.   
+ SEO ecc
+ Pages are loaded faster resulting in a better browsing experience for the user

  
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
