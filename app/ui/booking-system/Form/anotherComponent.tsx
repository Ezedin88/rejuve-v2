import { useCount } from "@/app/components/context/CountContext";

export default function AnotherComponent() {
    const { state, dispatch } = useCount();
    const handleIncrement = () => {
        dispatch({ type: 'ADD' });
    }
    const handleDecrement = () => {
        dispatch({ type: 'REMOVE' });
    }
    console.log('state from another component===>', state);
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}