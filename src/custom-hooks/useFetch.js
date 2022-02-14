import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController(); //Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data from that resource...");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          setIspending(false);
          setError(null);
          console.log(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIspending(false);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, error, ispending };
};

export default useFetch;
