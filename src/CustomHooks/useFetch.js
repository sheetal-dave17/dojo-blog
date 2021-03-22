import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error('Could not fetch data, something went wrong!!')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null);
            }).catch(error => {
                if (error.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsLoading(false);
                    setError(error.message);
                }
            })
        // clearn up function
        return () => abortController.abort();

    }, [url]);


    return { data, isLoading, error };
}

export default useFetch;