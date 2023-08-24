import { ChakraProvider } from "@chakra-ui/react"; // Chakra UI
import { ClerkProvider } from "@clerk/clerk-react"; // Clerk for auth

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // React Router for routing
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux"; // Redux for state management
import store from "./redux/store.js"; // Redux store

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <ClerkProvider
            publishableKey={import.meta.env.VITE_REACT_APP_CLERK_KEY}
        >
            <ChakraProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </ChakraProvider>
        </ClerkProvider>
    </Router>
);
