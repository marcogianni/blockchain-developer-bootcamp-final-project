# Frontend React

### Website available here: [blockchain-developer-bootcamp-final-project-marcogianni.vercel.app/](https://blockchain-developer-bootcamp-final-project-marcogianni.vercel.app/)

## Usage & Configuration

<<<<<<< Updated upstream
In addition to using the environment variables, you must also perform the following steps to configure the project.

=======
The frontend is structured in such a way that only certain users can view informations. 
If instead you intend to deploy a new smart contract you must then update the frontent project and follow the following steps.

1. Update address of `SalariesProxy.js` in `src/contracts`  
2. Update address of `Salaries.js` in `src/contracts`
>>>>>>> Stashed changes

ABIs should remain the same.
The next step is the creation of the `.env` file.
## 🔑 ENV FILE

Create an `.env` file on project root. Here the path:
```
blockchain-developer-bootcamp-final-project/frontent-react/.env
```

The env file shoud contain:
```
REACT_APP_EMPLOYER_ADDRESS=""                 # contract owner
REACT_APP_LIQUIDITY_PROVIDER_ADDRESS=""       # liquidity provider
```

<<<<<<< Updated upstream
Environment variables allow different views in the UI, you need to know in advance who is viewing the page.

In Front.js 

```javascript
if (!active) {
    return <ConnectPage />;
}

if (account === process.env.REACT_APP_EMPLOYER_ADDRESS) {
    return <EmployerPage />;
}

if (account === process.env.REACT_APP_LIQUIDITY_PROVIDER_ADDRESS) {
    return <LiquidityProviderPage />;
}
```
Addresses that have an associated salary will be able to see their monthly salary and withdrawal history.

Those who do not receive a salary and therefore are not an employee see only the login screen.

---

The project contains `.nvmrc` file with node version to use. Please run:
```
nvm use
```

Then install packages:
```
yarn
```

And then
```
yarn start
```




## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
=======
>>>>>>> Stashed changes


The project contains `.nvmrc` file with node version to use. Please run:
```
nvm use
```

Then install packages:
```
yarn
```

And then
```
yarn start
```

## 🖥️ Screenshots

The application looks like this at first startup.

<img src="../frontend-react/src/images/0.png">