import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Ultimate Tea Information Site</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact" >Contact Us</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
//we want to intercept the requests to be sent to the server
//so we change a href to Link to
//in the dom we still see anchor tags, but built in to these a tags are the special
//ability to intercept 