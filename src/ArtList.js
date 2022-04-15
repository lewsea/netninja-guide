import { Link } from "react-router-dom";

const ArtList = ({ artworks, title }) => {
  return (
    <>
      <h2 className='title'>{title}</h2>
      <div className='artworks'>
        {artworks.map((art) => (
          <div className='art-preview' key={art.id}>
            <div className='art-img'>
              <Link to={`/artworks/${art.id}`}>
                <img src={art.image} alt='{art.title}' />
              </Link>
            </div>
            <div className='art-details'>
              <Link to={`/artworks/${art.id}`}>
                <h4>{art.title}</h4>
              </Link>
              <p>
                Art by <a href={art.artistLink}>{art.artistName}</a>
              </p>
              {/* <button onClick={() => handleHide(art.id)} className='hide-btn'>
                Hide
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArtList;
