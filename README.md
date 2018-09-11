# SPACE-UI

## Folder structure

- All library components and files should live inside `src/lib` folder. Anything outside of that folder will not be published as a library file.
- You can create as many other folders as you want outside of `src/lib` for example / demo purpose as you are creating the library.
- The `src/lib/core/**` folder is for UI simple elements, as Buttons, Typography, Colors, etc.

## Commands

- `yarn build` has been modified to do a few things:
  - It will create a folder on the project root called `dist` and it will mimic the folder structure within the `src/lib` of the development section, but transpiled with babel and bundled with webpack.
  - It will also copy the package.json of the root folder to the `dist` folder, as we will need it to be able to publish it to npm.
  - Inside `dist`, tests, snapshots and stories are ignored by default (and should be).
- `npm run publish:npm` will bump the patch (x.x.3 to x.x.4) version of the package.json, build && publish the `dist` folder to npm.
  - NOTE: Make sure you are logged in with the entrenarme account before publishing it, both with:
    - > `npm login`
    - > `yarn login`

## Component structure

- Each component will live inside in its own folder (the name of the folder will be the name of the component itself), which will have a minimum of 3 files inside of it.
  - `index.js` will export the component function or class, named as its parent folder, and will have the component itself.
  - `index.stories.js` will contain the Storybook stories for that component, with their actions and other props.
  - `index.test.js` will have the snapshot test configured for that component (at least).
  - `/snapshot` will be created automatically by jest when doing snapshots of the components.

## Development

- 2 main proceses to run:
  - `yarn storybook` will run the storybook server and it will pick up all the components inside `src/lib` directory.
  - `yarn test` will run the testing process, it will warn us if any snapshot changes.
