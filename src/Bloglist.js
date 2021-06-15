import { Link } from "react-router-dom";
const Bloglist = (props) => {
  let blogs = props.blogs;

  return (
    <div className="Bloglist">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blogs.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Bloglist;
