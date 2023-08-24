import { Route, Routes } from "react-router-dom";
import "./App.css";

// All Pages Import
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ProtectedPage from "./pages/ProtectedPage";
import ReducerExample from "./pages/ReducerExample";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

// All Clerks Import
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/redux-example" element={<ReducerExample />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />

            {"This is how you can setup a protected page"}

            <Route
                path="/protected-page"
                element={
                    <>
                        <SignedIn>
                            <ProtectedPage />
                        </SignedIn>
                        <SignedOut>
                            <h1>You must be signed in to view this page</h1>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                }
            />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;
