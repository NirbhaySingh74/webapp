import "./App.css";
import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import ItemList from "./components/ItemList";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut }) => (
          <>
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">My Web App</h1>

              <button
                onClick={signOut}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Sign Out
              </button>
            </header>

            <main className="p-6">
              <ItemList />
            </main>
          </>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
