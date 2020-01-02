import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(data) {
    console.log(data);
  }
  render() {

    return (
      <div>
        <Header />
        <main className="main">
          <Card />
          <Form handleInput={this.handleInput} />
        </main>
        <Footer />
      </div>

    );
  }
}

export default App;
