# Frontend React

### Website available here: [blockchain-developer-bootcamp-final-project-marcogianni.vercel.app/](https://blockchain-developer-bootcamp-final-project-marcogianni.vercel.app/)

## Usage & Configuration


The frontend is structured in such a way that only certain users can view informations. 
If instead you intend to deploy a new smart contract you must then update the frontent project and follow the following steps.

1. Update address of `SalariesProxy.js` in `src/contracts`  
2. Update address of `Salaries.js` in `src/contracts`


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





## 🖥️ Screenshots

The application looks like this at first startup.

<img src="../frontend-react/src/images/0.png">