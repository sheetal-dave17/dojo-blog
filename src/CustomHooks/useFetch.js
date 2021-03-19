import {useState, useEffect} from 'react';

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
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
                setIsLoading(false);
                setError(error.message);                
            })
    }, []);

    return { data, isLoading, error };
}

export default useFetch;