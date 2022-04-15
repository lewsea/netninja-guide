const About = () => {
  return (
    <div className='about-page content-width'>
      <img
        src='https://user-images.githubusercontent.com/55370617/162598598-7da1c8cd-a915-4148-9c48-6e43634e8f3a.png'
        alt='About Banner'
      />
      <h1 className='title'>About this Project</h1>
      <p>
        I started learning <a href='https://reactjs.org/'>React </a>again after
        roughly 2 years, I created this using{" "}
        <a href='https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg'>
          Netninja's
        </a>{" "}
        Tutorial on{" "}
        <a href='https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d'>
          {" "}
          React
        </a>
        .
      </p>
    </div>
  );
};

export default About;
