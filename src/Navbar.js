import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar content-width'>
      <Link to='/' className='logo'>
        <img src={logo} alt='Logo' />
      </Link>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link
          to='/create'
          className='button'
          style={{
            color: "#fff",
            padding: "10px 2rem",
            borderRadius: "100px",
          }}
        >
          New Art
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
