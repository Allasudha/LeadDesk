This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
Testing is using Jest. Name tests `.test.js` or place them in `__tests__` directory

# Design

Functional programming style is used whenever approriate. React functional components are embraced over React class components. 
Artifial js class usage is discouraged.

## File organization

* division between components and containers,
* use component's name as folder name and put code in index.js

## Used libraries

### Ramda
Ramda is an utility library for a functional programming style.

### Styled-components

Styled components allows writing css straight into React components.

### Redux (redux-rematch)

* [Redux](https://redux.js.org)
* [Redux Rematch](https://rematch.gitbooks.io/rematch/#getting-started)

State managements is done by Redux. Redux-rematch tries to solve the issue with redux best practices boilerplate.

### React Recompose

[Recompose](https://github.com/acdlite/recompose). 

A React utility belt for function components and higher-order components.

This can avoid using React class based components using Recompose.