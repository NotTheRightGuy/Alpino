import { SignOutButton, useAuth } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
const Home = () => {
    const { isSignedIn } = useAuth();
    return (
        <div className="h-screen w-screen bg-[#1f1f1f] flex justify-center items-center flex-col">
            <span className="text-white text-3xl font-mono">
                {" "}
                We fall only to rise
            </span>
            <div className="flex mt-10 text-white gap-8 ">
                <Link
                    to="/sign-in"
                    className="cursor-pointer font-mono rounded-lg px-2 text-center py-2 border border-solid border-white border-1 hover:bg-white hover:text-black transition-all"
                >
                    Sign In
                </Link>
                <Link
                    to="/sign-up"
                    className="cursor-pointer font-mono rounded-lg px-2 text-center py-2 border border-solid border-white border-1 hover:bg-white hover:text-black transition-all"
                >
                    Sign Up
                </Link>
                <Link
                    to="/redux-example"
                    className="cursor-pointer font-mono rounded-lg px-2 text-center py-2 border border-solid border-white border-1 hover:bg-white hover:text-black transition-all"
                >
                    Redux Example
                </Link>
                <Link
                    to="/protected-page"
                    className="cursor-pointer font-mono rounded-lg px-2 text-center py-2 border border-solid border-white border-1 hover:bg-white hover:text-black transition-all"
                >
                    Protected Page
                </Link>
                {isSignedIn && (
                    <SignOutButton className="cursor-pointer font-mono rounded-lg px-2 text-center py-2 border border-solid border-white border-1 hover:bg-white hover:text-black transition-all" />
                )}
            </div>
        </div>
    );
};

export default Home;
