import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Work from './components/Work';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Main />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="contact">
        <Footer />

      </div>
    </>
  );
};

export default App;
