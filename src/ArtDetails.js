import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ArtDetails = () => {
  const { id } = useParams();
  const {
    data: art,
    error,
    isPending,
  } = useFetch("http://localhost:8000/artworks/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/artworks/" + art.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className='art-details content-width'>
      {error && (
        <div className='error-message'>
          <img
            src='https://user-images.githubusercontent.com/55370617/162560934-1efd6cba-bced-45d1-af3f-dc9752dcb55a.png'
            alt='Error Sad Kaneki'
          />
          <p>{error}</p>
        </div>
      )}
      {isPending && (
        <div className='loading-message'>
          <div className='loading-content'>
            <img
              src='https://camo.githubusercontent.com/ecf9303708f9e3a7279e3fddceb46dac1f55ea578042d60acca1ae21a89f313b/68747470733a2f2f76696e63656e74676172726561752e636f6d2f7061727469636c65732e6a732f6173736574732f696d672f6b624c643976625f6e65772e676966'
              alt='Loading Nyan Cat'
            />
            <h4>Loading...</h4>
          </div>
        </div>
      )}
      {art && (
        <article className='single-art'>
          <div className='breadcrumb'>
            <Link to='/'>Home</Link> / <Link to='/'>Artworks</Link> /
            <div className='link-active'>{art.url}</div>
          </div>
          <img src={art.image} alt='{art.title}' />
          <h2 className='title'>{art.title}</h2>
          <p>
            Art by <a href={art.artistLink}>{art.artistName}</a>
          </p>
          <p>{art.body}</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default ArtDetails;
