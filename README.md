# hacker-news-app

This application was built for a user to be able to search articles within Hacker News API and the application would display a list of articles within the `/search` route and then the `/history` route would display the users search history

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Remove all Unneccessary files

Use terminal or right-click and delete all files that were created through this auto-build that you do not need for your application

## Add Dependencies

Add dependencies that are needed for your project using `yarn add`

For this application, I added `react-router-dom` and `react-redux`

### 'react-router-dom`

This is a npm package that allows you to import such things as `BrowserRouter` `Router` `NavLink` and so on and so forth. These libraries are useful for browser function and route function within your application

### `react-redux`

This is a dependency that allows you to manage the state of your application more easily. By using `createStore` `store` and other libraries you are able to maintain the state within `store` to allow your application to be more accessible throughout. You are able to map state to props through the `mapStateToProps` function and by using the `dispatch` method you are able to perform an action that will update the state within `store`.

## Containers

I built two seperate containers that were accessed via routing

``
        <Route 
            exact
            path ="/search"
            component={NewsListContainer}
            />
        <Route
            exact
            path="/history"
            component={HistoryListContainer}
            />

``
And were navigated to via the use of a `NavLink` from `react-router-dom`

``
    <NavLink
        className='p-4 inline-block'
        exact
        to='/search'
        >
        Search News
    </NavLink>
    <NavLink
        className='p-4 inline-block'
        exact
        to='/history'
        >
        History
    </NavLink>
``

within the NavBar component

The first container, `NewsListContainer`, accessed three different components: The `NewsListContainer` also called the `dispatch` method and `connect` library from redux to update the state of the searchHistory array through the reducer `manageSearchHistory`.

The second container, `HistoryListContainer`, accessed one component. The `HistoryListContainer` used redux to update the state of the searchHistory array by using the mapStateToProps function.

## Components

### `NewsListContainer` components

 1. NewsSearch - This component was used to handle the state of the user input and held the form that was used to submit to access the fetch of the API through the specified url with the given search parameter which wwas located in the Container

 2. NewsList - This component was used to handle the array of articles that were returned from the API and sent each individual article to the next component

 3. NewsArticle - This component received each article and displayed it in a particular format

### `HistoryListContainer` component

 1. HistoryList - This components task was to display a list of items that had been searched for


