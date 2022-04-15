import ArtList from "./ArtList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: artworks,
    isPending,
    error,
  } = useFetch("http://localhost:8000/artworks");

  return (
    <main className='content-width home'>
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
      {artworks && (
        <ArtList
          artworks={artworks.filter((art) => art.artistName === "Wonbin Lee")}
          title='Wonbin Lee'
        />
      )}
      {artworks && (
        <ArtList
          artworks={artworks.filter((art) => art.artistName === "Zeronis")}
          title='Zeronis'
        />
      )}
      {artworks && <ArtList artworks={artworks} title='Everything Else' />}
    </main>
  );
};

export default Home;
