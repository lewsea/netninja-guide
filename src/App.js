import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import ArtDetails from "./ArtDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/artworks/:id'>
            <ArtDetails />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
