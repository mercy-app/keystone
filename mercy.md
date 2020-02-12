### Folder structure

The mercy project is developed on keystone framework with customizations. As a result, we are putting our project folder within keystone's repository for easier dependencies linking.

```
Keystone
|
|____ packages -> keystone modules
|____ |____ app-admin-ui -> keystone admin ui with mercy customizations
|____ mercy -> mercy main folder
|____ |____ admin-ui -> pages using keystones admin custom hooks page.
|____ |____ shop -> pickbazar next.js app
|____ |____ |____ common -> superprops landing functions
|____ |____ |____ landing -> superprops landing pages
|____ |____ |____ etc -> rest files are for pickbazar shop
```

### Rules

- Each new file created needs to end with '-mercy' in its name. ex: main.js will be main-mercy.js

### Enable typescript editing and pickbazar shop customization.

1. make a copy of `packages/app-admin-ui/server/getWebpackConfig.js` as `packages/app-admin-ui/server/getWebpackConfig-mercy.js`
2. to enable typescript editing in custom admin page, in `packages/app-admin-ui/server/getWebpackConfig-mercy.js` ,replace rules of babel-loader's testing config `test: /\.js$/` to `test: /\.(ts|js)x?$/` to enable the usage of typescript.
3. add `extensions: ['.tsx', '.ts', '.js', '.jsx']` to `resolve` in `packages/app-admin-ui/server/getWebpackConfig-mercy.js`
4. remove `Nav` component from `packages/app-admin-ui/client/index` to remove the sidebars in admin page.
5. add `modules: [path.resolve(__dirname, '../../shop/'), 'node_modules']` to `resolve` to enable admin-ui to use shops files with absolute path.
