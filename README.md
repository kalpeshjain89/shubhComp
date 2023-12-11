### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

link tree:
https://linktr.ee/shubhamcomputersbynaresh

Gviz query:
https://community.niotron.com/t/get-data-from-spreadsheet-using-csv-range-sql-query-method/2144

"homepage": "http://kalpeshjain89.github.io/shubhComp",

https://github.com/gitname/react-gh-pages

To fix image path issue in gh-pages:
https://stackoverflow.com/questions/53528139/images-will-not-load-when-deploying-to-github-pages
https://stackoverflow.com/questions/51002481/images-not-loading-when-deploying-to-github-pages

Github pages deployment:
change image paths
change routes to match the project name

To show images from gh-pages deployment:
Change image path to "./images..." in ProductCategories
Change image path to "./shubhComp/..." in internal pages
Added path in app.js:
    <Route exact path="/shubhComp" element={<Homepage productCategories={productCategories} />} />
Change route 'routeTo': '/shubhComp' in Navbar.js
