## Introduction

The mercy project is developed on keystone framework with customizations. We are using the framework to develop our project in 3 seperate apps. we are also using several different templates to enhance our development process.

### App components

1. Keystone graphql api
2. Keystone admin ui app with customizations
3. Keystone plugin with Next.js app

### Templates

1. Pickbazar shop
2. Superprops landing

### Usage

- superprops landing page will be integrated under shop's next app.
- part of pickbazars / superprops components will need customizations to be used in non-ssr environment to be shared with admin ui app.

## Folder structure

We are putting our project folder within keystone's repository for easier dependencies linking.

```
Keystone
|
|____ packages -> keystone modules
|____ |____ app-admin-ui -> keystone admin ui with mercy customizations
|____ |____ etc -> keystone packages
|____ mercy -> mercy main folder
|____ |____ admin-ui -> pages using keystones admin custom hooks page.
|____ |____ shop -> pickbazar next.js app
|____ |____ |____ common -> superprops landing functions
|____ |____ |____ landing -> superprops landing pages
|____ |____ |____ react-board -> customized from react-kanban package
|____ |____ |____ etc -> rest files are for pickbazar shop
```

## Rules

- Each new file created needs to end with '-mercy' in its name. ex: main.js will be main-mercy.js for better syncing when updating from original templates / keystone

## Steps of integration

### Add template projects

1. follow get started in keystone to start a keystone project and move the folder to keystone repo, name it `mercy`.
2. add `pickbazar shop` to mercy folder, copy all the dependencies in package.json of shop to mercy root folder's package.json
3. add superprops `common` and `landing` folder to `mercy/shop`, and copy all the dependencies in landing to mercy root folder's package.json

### Enable typescript and customizations

1. make a copy of `packages/app-admin-ui/server/getWebpackConfig.js` as `packages/app-admin-ui/server/getWebpackConfig-mercy.js` and change `packages/app-admin-ui/index` webpack file to `getWebpackConfig-mercy.js`
2. to enable typescript editing in custom admin page, in `packages/app-admin-ui/server/getWebpackConfig-mercy.js` ,replace rules of babel-loader's testing config `test: /\.js$/` to `test: /\.(ts|js)x?$/` to enable the usage of typescript.
3. add `extensions: ['.tsx', '.ts', '.js', '.jsx']` to `resolve` object in `packages/app-admin-ui/server/getWebpackConfig-mercy.js`
4. add `modules: [path.resolve(__dirname, '../../../mercy/shop'), 'node_modules']` to `resolve` to enable admin-ui to use shops files with absolute path.

### Enable superprops in next.js

1. due to this line `config.resolve.modules.push(__dirname);`. we do not have to add any extra config to make superprops work in mercy. This line enables absolute path for `common` and `landing` page directly.

### app-admin-ui customizations

1. remove `Nav` component from `packages/app-admin-ui/client/index` to remove the sidebars in admin page.

### arch ui customizations

we have a customized globalstyles in arch ui package `packages/arch/packages/theme/src/colors-mercy.js`
