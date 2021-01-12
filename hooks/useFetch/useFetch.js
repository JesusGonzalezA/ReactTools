import {
    useEffect,
    useState,
    useRef
} from 'react'

const emptyState = {
    data: null,
    loading: true,
    error: null
};

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState(emptyState)

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState(emptyState);

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current)
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    })

            })
            .catch( () => {
                setState({
                    data: null, 
                    loading: false,
                    error: 'Could not fetch the data'
                })
            })
    }, [url]);


    return state;
}