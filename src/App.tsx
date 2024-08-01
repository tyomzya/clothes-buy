import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from './components/Products';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
