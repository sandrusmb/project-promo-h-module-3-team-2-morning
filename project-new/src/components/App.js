import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Card from './Card';
import Form from './Form';
import Footer from './Footer';


function App() {
  return (
    <div >
      <Header />
      <main className="main">
        <Card />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
