import { createContext, useContext, useReducer } from "react";

const MapApiContext = createContext({
    state: {
        loadedMapApi: false
    },
    dispatch: (action: { type: string }) => { }
});

const initialState = {
    loadedMapApi: false
}

function reducer(state: {
    loadedMapApi: boolean;
}, action: {
    type: string;
}) {
    switch (action.type) {
        case 'LOAD_MAP_API':
            return { ...state, loadedMapApi: true };
        default:
            return state;
    }
}

export function MapApiProvider({ children }: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <MapApiContext.Provider value={{ state, dispatch }}>
            {children}
        </MapApiContext.Provider>
    );
}

export function useMapApi() {
    const context = useContext(MapApiContext);
    if (!context) {
        throw new Error("useMapApi must be used within a MapApiProvider");
    }
    return context;
}