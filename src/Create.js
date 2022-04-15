import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [artistName, setArtistName] = useState("Zeronis");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const art = { title, body, artistName, image };

    setIsPending(true);

    fetch("http://localhost:8000/artworks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(art),
    }).then(() => {
      console.log("New art added");
      setIsPending(false);
      //   history.go(-1);
      history.push("/");
    });
  };

  return (
    <div className='create content-width'>
      <h2>Add a new art</h2>
      <form onSubmit={handleSubmit}>
        <label>Art title</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Art Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Artist</label>
        <select
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        >
          <option value='Zeronis'>Zeronis</option>
          <option value='Wonbin Lee'>Wonbin Lee</option>
          <option value='Yueko'>Yueko</option>
        </select>
        <label>Image URL</label>
        <input
          type='text'
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        {!isPending && <button>Add Art</button>}
        {isPending && <button disabled>Adding Art....</button>}
      </form>
      {/* <p>{title}</p>
      <p>{body}</p>
      <p>{image}</p>
      <p>{artist}</p> */}
    </div>
  );
};

export default Create;
