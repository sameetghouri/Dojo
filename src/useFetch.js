import { useState, useEffect } from "react";

const useFetch = (url) => {
    const[data, setdata] = useState(null);
    const[isloading,setIsLoading]= useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        // const abortcon = new AbortController();
        fetch(url)
        .then(res => {
            if(!res.ok){throw Error("Could not fetch data")}
            return res.json()})
        .then(data => {
            setdata(data);
            setIsLoading(false);
            setError(null)})
        .catch(err => {
            // if(err.name === "AbortError")
            // {console.log("Fetch Aborted")}
            //  else {}
            setError(err.message);
                        setIsLoading(false)})
        // return () => abortcon.abort();
    }, [url]);
    return {data, isloading, error}  // we can use an Array [data, isloading, error] but for that, order of array objects must be same at importing Time
}

export default useFetch;