import React from 'react';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import GlobalStyle from './components/GlobalStyle';
import MovieDetail from './components/MovieDetail';
import Nav from './components/Nav';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollTop from './components/ScrollTop'

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <ScrollTop/>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={ location } key={ location.pathname }>
          <Route path="/" exact>
            <AboutUs/>
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
