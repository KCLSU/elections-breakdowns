# KCLSU Elections Breakdowns

This is a react application built with:
- typescript
- styled components 
- ant design components

It consumes MSL endpoints for retrieving elections results when provided with a Post Id and an Elections Id. This is not a stand-alone website. It is to be used as a script loaded onto a webpage of the kclsu.org website.

Once the compiled JS file and css style sheets have been added to the header, the html markup requires a div with id `root`.

```<div id="root></div>```

The script has a listener for a specific custom event. These events can be dispatched from anywhere in the window, and does not need to originate from within the react app. 

The custom event must have the following structure and name, where the value of the detail property is stringified:

```
const customDetail = {
    election: 00,  // ELECTION ID
    post: 00 // POST ID
};

const ev = new CustomEvent('emitClick', JSON.stringify(customDetail));

```


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
