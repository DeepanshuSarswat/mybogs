// import { useState, useEffect } from "react";

import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, ispending } = useFetch("http://localhost:8000/blogs/");
  return (
    <div className="home">
      {ispending && (
        <div className="main">
          <div className="child"> Loading...</div>
          <div className="child1">Loading... </div>
        </div>
      )}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  );
};

export default Home;
