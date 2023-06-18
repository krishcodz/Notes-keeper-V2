# dkeeper
Notes Keeper Web-3 Application , Built using Reactjs frontend and ICP blockchain for the Backend.This is just an updated version of the notes keeper app that i built previously with reactjs and withot any backend. But this project uses ICP blockchain as the blockchain to save the notes in canister ,so that the notes data is not lost.

## How to run the project locally

If you want to test my project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.

Additionally, run the below command to start the frontend

```bash
npm start
```

Which will start a server at `http://localhost:8080`
