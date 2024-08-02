// CountContext.js
import { createContext, useContext, useReducer } from "react";

const CountContext = createContext({});

const initialState = {
    count: 0
};

function reducer(state: {
    count: number;
}, action: {
    type: string;
}) {
    switch (action.type) {
        case 'ADD':
            return { ...state, count: state.count + 1 };
        case 'REMOVE':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

export function CountProvider({ children }: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CountContext.Provider value={{ state, dispatch }}>
            {children}
        </CountContext.Provider>
    );
}

export function useCount() {
    const context = useContext(CountContext);
    if (!context) {
        throw new Error("useCount must be used within a CountProvider");
    }
    return context;
}
