/* --------------- Skills -------------- */
const react = {
  name: 'React.js',
  id: 1,
  exposure: 'Used in Project(s)',
  logoURL: '../public/img/react_logo.jpg',
  description: '"React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."'
} 
const redux = {
  name: 'Redux',
  id: 2,
  exposure: 'Used in Project(s)',
  logoURL: '../public/img/redux_logo.jpg',
  description: '"Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook\'s Flux architecture"'
}
const express = {
  name: 'Express.js',
  id: 3,
  exposure: 'Used in Project(s)',
  logoURL: '../public/img/express_logo.jpg',
  description: '"Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs."'
} 
const d3 = {
  name: 'D3.js',
  id: 4,
  exposure: 'Used in Project(s)',
  logoURL: '../public/img/d3_logo.jpg',
  description: '"D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of the widely implemented SVG, HTML5, and CSS standards. It is the successor to the earlier Protovis framework."'
}
const node = {
  name: 'Node.js',
  id: 5,
  exposure: 'Used in Project(s)',
  logoURL: '../public/img/node_logo.jpg',
  description: '"Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser."'
}
const reactNative = {
  name: 'React Native',
  id: 6,
  exposure: 'Used in Project(s)',
  logoURL: '../public/img/react-native_logo.jpg',
  description: '"React Native is an entire platform allowing you to build native, cross-platform mobile apps. It uses the same design as React, letting you compose a rich mobile UI using declarative components."'
}

const expo = {
  name: 'Expo',
  id: 7,
  exposure: 'Used in Project(s)',
  logoURL: '../public/img/expo_logo.jpg',
  description: '"Expo is a free and open source toolchain built around React Native to help you build native iOS and Android projects using JavaScript and React."'
}

const webpack = {
  name: 'Webpack',
  id: 8,
  exposure: 'Used in Project(s)',
  logoURL: '../public/img/webpack_logo.jpg',
  description: '"Webpack is an open-source JavaScript module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. Webpack takes modules with dependencies and generates static assets representing those modules."'
}

export const skills = {1: react, 2: redux, 3: express, 4: d3, 5: node, 6: reactNative, 7: expo}

/* --------------- Project -------------- */
const atomizer = {
  name: 'Atomizer',
  id: 1,
  description: 'A web application that displays an expansive and interactive representation of the related topics to a user-provided keyword, via a web-crawl of the keyword’s Wikipedia Page.',
  skills: [react, redux, express, d3, node],
  link: 'http://atomize.live',
  pics: ['../public/img/atomizer-1.jpg','../public/img/atomizer-2.jpg']
}

const okMakeIt = {
  name: 'OK, Make it',
  id: 2,
  description: 'An iPhone/Android compatible native application that utilizes real-time transit feeds provided by the NYC MTA to alert the user to when the next train will arrive at a station they’ve selected.',
  skills: [ reactNative, redux, expo],
  link: 'https://github.com/awatson31911/ok_MakeIt',
  pics: ['', '']
}

export const projects = {1: atomizer, 2: okMakeIt}

/* --------------- Roles -------------- */
const appSupportEng = {
  title: 'Application Support Engineer',
  company: 'Black Mountain Systems',
  description: ['Troubleshoot client Production issues; convey potential resolutions to product and implementations teams and deploy', 'Translate technical processes and provide training to non-technical clients']
}

const customerEng = {
  title: 'Customer Sucess Engineer',
  company: 'Lorem Technologies',
   description: ['Built additional features in front-end, provided troubleshooting and consulted clients with web applications built on Squarespace/WordPress platforms', 'Provided clients with site roadmaps, including General Design, Design for Convergence and SEO']
}

export const roles = [appSupportEng, customerEng]