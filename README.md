This project is a simple shopping list web application that shows list of products and option to delete and update the product.
It also provides feature to add product to the shopping list.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

### Formik

Formik takes care of the repetitive and annoying stuff--keeping track of values/errors/visited fields, orchestrating validation, and handling submission.


### Yup
Used for form validations.