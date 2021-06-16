import { useState } from "react";
import { useHistory } from "react-router-dom";
const Createblog = () => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [author, setauthor] = useState("Pinu");
  const [ispending, setispending] = useState(false);
  const history = useHistory();
  function titlechange(valu) {
    setTitle(valu.target.value);
  }
  function bodychange(valu) {
    setbody(valu.target.value);
  }
  function authorchange(valu) {
    setauthor(valu.target.value);
  }
  function submitdata(event) {
    event.preventDefault();

    const blogobject = { title, body, author };
    setispending(true);

    fetch("https://deepanshublogss.netlify.app/blogs/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blogobject),
    }).then(() => {
      console.log("New Blog Added");
      setispending(false);
    });
    history.push("/");
  }
  return (
    <div className="Createblog">
      <h2 className="Createblogh2">Add A New Blog</h2>
      <form onSubmit={submitdata}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          onChange={titlechange}
          value={title}
        ></input>
        <label>Blog Body:</label>
        <textarea required onChange={bodychange} value={body}></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={authorchange}>
          <option value="Deepanshu Sarswat">Deepanshu Sarswat</option>
          <option value="Pinu">Pinu</option>
        </select>
        {!ispending && <button>Add Blog</button>}
        {ispending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Createblog;
