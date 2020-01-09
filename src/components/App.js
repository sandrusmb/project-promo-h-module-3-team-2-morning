import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 1,
      file: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handlePalette = this.handlePalette.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }
  handlePalette(data) {

    this.setState({ data });
  }
  handleInput(data) {

    this.setState({ [data.name]: data.value });
  }

  handleImage(data) {
    console.log(data);
    this.setState({ [data.name]: data.value });
  }
  render() {
    console.log(this.state.file);
    return (
      <div>
        <Header />
        <main className="main">
          <Card
            formData={this.state}
            palettesData={this.state.data} />
          <Form
            handleInput={this.handleInput}
            handlePalette={this.handlePalette}
            handleImage={this.handleImage}
            file={this.state.file}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
