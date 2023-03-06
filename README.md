# TUTORIAL 4

* *Last Modification Date*: 06 FEB 2023
* *Tutorial 4:
* *Deployed app link : https://stellular-boba-29a3b2.netlify.app/
* *Gitlab Link : https://git.cs.dal.ca/vaghasia/csci5709-w23-tutorials/-/tree/Tutorial_4

## Author

* [SAGARKUMAR VAGHASIA](sg682034@dal.ca) - *(OWNER)*


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Deployment

<!-- This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment) -->

The react app[1] is deployed on netlify[2].I have developed simple react web application of 3 pages namely Login, Profile and UserDetail. The code was first hosted on GitLab and then on GitHub and lastly the netlify account was linked with repository from github.At the end, the web application was deployed in few moements and then if are any changes then netlify automatically build the react application and deploy it. 



# Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Reactjs](https://reactjs.org/docs/create-a-new-react-app.html) - The web framework used
**

# Sources Used

I created login page having email and password. On successful login, the user details are fetched from the API [3]. This fetched details are displayed on the profile listing page. I used list format [4] to display the data. In order to go to the profile listing page i used "navigate" function to move from one page to another [5]. 
Apart from this, i used react hooks [6] to set the user data. On clicking to one of the user, I was directed to the user detail page where i can see details of that particular user based on the id. The stored data is saved acrossed browser [8]. 
Further, i implemented search and filter in the profile listing page [7] to search the user based on firstname or lastname.


# Acknowledgments

## References :

[1]“Create a new react app,” Reactjs.org. [Online]. Available: https://reactjs.org/docs/create-a-new-react-app.html. [Accessed: 05-Feb-2023].

[2] “Develop and deploy websites and apps in record time,” Netlify. [Online]. Available: https://www.netlify.com/. [Accessed: 05-Feb-2023].

[3] “Fetch API,” Mozilla.org. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API. [Accessed: 06-Mar-2023].


[4]	J. Johnson, “5 simple and practical CSS list styles you can copy and paste,” Design Shack, 22-Feb-2013. [Online]. Available: https://designshack.net/articles/css/5-simple-and-practical-css-list-styles-you-can-copy-and-paste/. [Accessed: 06-Mar-2023].


[5] “How to navigate from one page to another in react js?,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/37295377/how-to-navigate-from-one-page-to-another-in-react-js. [Accessed: 06-Mar-2023].


[6] “Introducing hooks,” Reactjs.org. [Online]. Available: https://reactjs.org/docs/hooks-intro.html. [Accessed: 06-Mar-2023].


[7]	M. Gathoni, “How to filter search results while typing with React,” MUO, 23-Sep-2022. [Online]. Available: https://www.makeuseof.com/react-search-bar-filters-data-create/. [Accessed: 06-Mar-2023].


[8]	“Window.localStorage,” Mozilla.org. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage. [Accessed: 06-Mar-2023].



 




