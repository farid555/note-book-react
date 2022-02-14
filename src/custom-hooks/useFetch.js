import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the dat from that resource...");
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
          setError(err.message);
          setIspending(false);
        });
    }, 1000);
  }, [url]);
  return { data, error, ispending };
};

export default useFetch;
