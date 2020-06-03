# express-react-csr-poc

Simple proof-of-concept for a single codebase for a back-end framework and React.

## Steps to Recreate

1. Run [Express generator](https://expressjs.com/en/starter/generator.html). You can select any back-end generator of
   your choice.
2. Install package dependencies using npm or Yarn. Check the dependency list on the [`package.json` file](./package.json).
3. Edit [app.js](./app.js) to accommodate React rendering code. This may differ depending on the framework selected on
   Step 1.
4. Create a `.babelrc` file. Refer to the [.babelrc file](./.babelrc) on this repo.
5. Create a `rollup.config.js` file. Refer to the [rollup.config.js file](./rollup.config.js) on this repo.
6. Create a `.env` file. Refer to the [.env.example file](./.env.example) on this repo to create your local
   configuration.
7. Browse the [`frontend/` directory](./frontend) for the frontend code.
