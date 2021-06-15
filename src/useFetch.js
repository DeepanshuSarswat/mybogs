import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [ispending, setpending] = useState(true);
  useEffect(() => {
    setInterval(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setdata(data);
          setpending(false);
        });
    }, 2000);
    return () => console.log("Cleanup");
  }, [url]);
  return { data, ispending };
};

export default useFetch;
