import { useState } from 'react'

export const useCounter = ( initialCounter = 0, factor = 1) => {
    
    const [counter, setCounter] = useState(initialCounter);

    const increment = () => {
        setCounter( counter + factor );
    }

    const decrement = () => {
        setCounter( counter - factor );
    }

    const reset = () => {
        setCounter( initialCounter );
    }

    return {
        counter,
        reset,
        increment, 
        decrement
    };
}