import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";
const BlogDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data: blog, ispending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  function Deleteblogs() {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  }
  return (
    <div className="Blogdetail">
      {ispending && (
        <div className="main">
          <div className="child"> Loading...</div>
          <div className="child1">Loading... </div>
        </div>
      )}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p className="writter">Written by {blog.author}</p>
          <div className="body">{blog.body}</div>
          <button onClick={Deleteblogs}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
