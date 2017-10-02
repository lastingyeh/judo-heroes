### vscode - debugger for ES6 

    1.1 npm

      babel-register babel-preset-es2015

    1.2 .babelrc

      {
        "presets": [
          "es2015"
        ],
        "sourceMaps": true,
        "retainLines": true
      }

    1.3 launch.json

      add "sourceMaps": true

    1.4 add src/index.js

      add require('babel-register');
          require('./server');

### setup

  yarn install

### run dev

  yarn start:dev:universal

### modify 

  1. app-client.js (modify)

    import { hydrate } from 'react-dom';

    hydrate(<AppClient />, document.getElementById('main'));

  refs by https://hackernoon.com/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67

  2. /components/*

    modify app import-way

    ex. import { Layout } from './Layout'; -> import Layout from './Layout';

### refs

  https://github.com/lmammino/judo-heroes-2

  https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app
