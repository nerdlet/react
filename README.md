ARA-REACTADMINJS TEMPLATE
INSTRUCTIONS

#### Author: @author Ashwin Hariharan

#### Modified by: brenda nyokabi

#### Step 1 : 

- Fork or clone this repo. Alternatively - if you have NPM installed, you can also do `npm install adminlte-reactjs`.
- Install nodejs and NPM
- Go to the project's root folder from your terminal and run `npm install`
- Run `npm run dev`
- Going to [http://localhost:8000](http://localhost:8000) will render an empty dashboard skeleton in the client-side using ReactJS. Clicking on one of the dashboard options on the left pane displays the original dashboards from AdminLTE.
- Go to [http://localhost:8000/widgets.html](http://localhost:8000/widgets.html) to see available widgets in ReactJS.
- Use [React Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to understand the components hierarchy and structure and to track down bugs. 

#### Step 2:

- Pick a [page](https://almsaeedstudio.com/themes/AdminLTE/index2.html) from the AdminLTE project to reactify it, or some widget that hasn't been reactified yet.
- If the page for it doesn't exist in the repo, create one for it in the [views](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/views) folder, and render the page by defining a route for it inside [routes.js](https://github.com/booleanhunter/ReactJS-AdminLTE/blob/master/routes.js).
- Create the entry point that renders the components inside [/src/pages](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/src/pages) folder. Now you can begin writing your components and testing them!
- To view and test your components on the page, add your entry point in [webpack.config.js](https://github.com/booleanhunter/ReactJS-AdminLTE/blob/master/webpack.config.js). Run `webpack -p` to generate the bundle for the page, and include the bundle and associated vendors for it in the page using `script` tags.
- `webpack-dev-server` along with React Hot Loader can be used to ease your development workflow. This can be done by installing dev dependencies from `package.json` file. If you haven't, then run `npm install webpack-dev-server` and `npm install react-hot-loader`. Then in your HTML, change your javascript bundles' source paths to point to the webpack-dev-server proxy in your `script` tags. So if you have these bundles for example,

```html
<script src="/dist/js/vendors.js"></script>
<script src="/dist/js/app.bundle.js"></script>
```

change this to 

```html
<script src="http://localhost:8080/dist/js/vendors.js"></script>
<script src="http://localhost:8080/dist/js/app.bundle.js"></script>
```

Then you can run `webpack-dev-server --hot --inline` just once - and every time you make any edits to your code and save it, the server will automatically create bundles and update the changes in the browser. This is highly recommended instead of running `webpack -p` every time you make some edit in your code. You can later change the `script` tags back once you stop `webpack-dev-server`.

For a detailed explanation on setting up a workflow using Webpack, check out my blog post - [Webpack for The Fast and The Furious](https://medium.com/@booleanhunter/webpack-for-the-fast-and-the-furious-bf8d3746adbd#.uzx2l0hy4) :oncoming_police_car:

This is still a work in progress and will get better over time. 

#### Step 3: Including your new components in the library
After you've finished writing a component and testing it out, you can include it in the library.
- Place/move your component inside the [/src/components](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/src) folder and include it inside `widgets.src.js`.
- Run `npm build` to generate the library `reactjsAdminlte.js`. Your component will be included in the library!
- To make sure that your component works correctly, test it out by including it in the page using the library.

