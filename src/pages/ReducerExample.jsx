import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // useDispatch hook is used to dispatch actions to the store to update the state
import { doSomething } from "../redux/reducers/exampleReducer"; // Import the action creator

import { Button } from "@chakra-ui/react";

const ObserverComponent = () => {
    // This Component can exist anywhere in the app
    // in this example we have included it in the same file for simplicity
    const example = useSelector((state) => state.example); // Get the state from the store,
    //the 'example' in state.example is the name of the reducer given in the store
    return <div>{example}</div>; // Display the state
};

const ReducerExample = () => {
    const dispatch = useDispatch(); // Create a dispatch variable to dispatch actions to the store
    const [input, setInput] = useState(""); // Create a state variable to store the input value

    return (
        <div>
            <h1>ReducerExample</h1>
            <span>Displays the state</span>
            <ObserverComponent /> {/* Display the state */}
            <br />
            <span>Enter a value to dispatch to the store</span>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="outline mx-4"
            />
            <Button
                onClick={() => {
                    dispatch(doSomething(input)); // Dispatch the action to the store
                    setInput(""); // Reset the input value
                }}
                colorScheme="blue"
            >
                Dispatch to store
            </Button>
            <div className="text-xs">
                Refer the code in /src to better understand what is happening
            </div>
        </div>
    );
};

export default ReducerExample;
