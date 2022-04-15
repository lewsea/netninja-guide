import { useState, useEffect } from "react";
import ArtList from "./ArtList";

const Home = () => {
  const [artworks, setArtworks] = useState([
    {
      title: "neko witch",
      body: "lorem ipsum",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/044/723/741/large/wonbin-lee-1.jpg?1640949003",
      artistName: "Wonbin Lee",
      artistLink: "https://www.artstation.com/lwbv2001",
      id: 1,
    },
    {
      title: "witch series",
      body: "lorem ipsum",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/046/601/947/large/wonbin-lee-3-1.jpg?1645514671",
      artistName: "Wonbin Lee",
      artistLink: "https://www.artstation.com/lwbv2001",
      id: 3,
    },
    {
      title: "witch series green",
      body: "lorem ipsum",
      image:
        "https://cdna.artstation.com/p/assets/images/images/046/601/948/large/wonbin-lee-4-1.jpg?1645514683",
      artistName: "Wonbin Lee",
      artistLink: "https://www.artstation.com/lwbv2001",
      id: 4,
    },
    {
      title: "witch series red",
      body: "lorem ipsum",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/046/601/951/large/wonbin-lee-5-1.jpg?1645514695",
      artistName: "Wonbin Lee",
      artistLink: "https://www.artstation.com/lwbv2001",
      id: 5,
    },
    {
      title: "Yuri - ETHER STAR",
      body: "lorem ipsum",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/037/121/189/4k/zeronis-14b4c912-f7ee-41c8-8a2a-5a0d4f80848d.jpg?1619545194",
      artistName: "Zeronis",
      artistLink: "https://www.artstation.com/zeronis-pk",
      id: 6,
    },
    {
      title: "Amelia - ETHER STAR",
      body: "lorem ipsum",
      image:
        "https://cdna.artstation.com/p/assets/images/images/037/121/132/4k/zeronis-05f0e44b-f369-4dc3-a31e-07c957b22f88.jpg?1619545085",
      artistName: "Zeronis",
      artistLink: "https://www.artstation.com/zeronis-pk",
      id: 7,
    },
    {
      title: "Lily - ETHER STAR",
      body: "lorem ipsum",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/036/567/813/4k/zeronis-31ba8fd2-7534-4ada-a3e4-28c01a26d1e3.jpg?1618000493",
      artistName: "Zeronis",
      artistLink: "https://www.artstation.com/zeronis-pk",
      id: 8,
    },
    {
      title: "Mina - ETHER STAR",
      body: "lorem ipsum",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/036/567/865/4k/zeronis-4acb6b6e-3f27-44c1-acd6-2f8a66d4beed.jpg?1618000559",
      artistName: "Zeronis",
      artistLink: "https://www.artstation.com/zeronis-pk",
      id: 9,
    },
  ]);

  const handleHide = (id) => {
    const newArtworks = artworks.filter((art) => art.id !== id);
    setArtworks(newArtworks);
  };

  useEffect(() => {
    console.log("artwork hidden");
  }, [artworks]);

  return (
    <main className='content-width home'>
      <ArtList
        artworks={artworks.filter((art) => art.artistName === "Wonbin Lee")}
        title='Wonbin Lee'
        handleHide={handleHide}
      />
      <ArtList
        artworks={artworks.filter((art) => art.artistName === "Zeronis")}
        title='Zeronis'
        handleHide={handleHide}
      />
    </main>
  );
};

export default Home;
