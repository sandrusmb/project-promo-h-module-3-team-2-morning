import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(data) {
    console.log(data);
    this.setState({ [data.id]: data.inputValue })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <main className="main">
          <Card formData={this.state} />
          <Form handleInput={this.handleInput} />
        </main>
        <Footer />
      </div>

    );
  }
}

export default App;
