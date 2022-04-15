import { useState, useEffect } from "react";

const Comments = () => {
  //   const title = "Try Again";
  //   const numberOfTries = 14;
  //   no objects or booleans (wont work)
  //   const person = { name: 'yoshi', age: 30};
  //   const link = "https://www.youtube.com/";

  //   const handleClick = (e) => {
  //     console.log("hello, people", e);
  //   };

  //   const handleClickAgain = (name, e) => {
  //     console.log("hello " + name, e.target);
  //   };

  //   Use State hook

  //   let name = "mario";
  //   const [name, setName] = useState("Lewsea");
  //   const [age, setAge] = useState("14");

  //   const handleClick = () => {
  //     setName("Luis");
  //     setAge(20);
  //   };

  //   If you want to use Effect once

  //   useEffect(() => {
  //     console.log("use effect run");
  //   }), [];

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/artworks")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setArtworks(data);
          setIsPending(false);
        });
    }, 2000);
  }, []);

  return (
    <main className='content-width home'>
      {/* <h1>{title}</h1>
      <p>You have {numberOfTries} tries left.</p> */}
      {/* <p>{person}</p> */}

      {/* <p>{10}</p>
      <p>{"hello"}</p>
      <p>{[1, 2, 3, 4, 5]}</p>
      <p>{Math.random() * 10}</p>

      <a href={link}>Youtube link</a> */}

      {/* <h1 className='heading-title'>Home</h1>
      <p>
        Hi I am {name} i am {age} years old
      </p>
      <div className='buttons-container'>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => handleClickAgain("Luis", e)}>Click me</button> 
      </div> */}
    </main>
  );
};

export default Comments;
