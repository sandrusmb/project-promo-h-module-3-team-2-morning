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
      name: "",
      job: "",
      file: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      file: "",
      data: 1
    };
    this.handleInput = this.handleInput.bind(this);
    this.handlePalette = this.handlePalette.bind(this);
    this.resetData = this.resetData.bind(this);
  }
  handlePalette(data) {

    this.setState({ data });
  }
  handleInput(data) {

    this.setState({ [data.id]: data.inputValue });
  }

  resetData(ev) {
    ev.preventDefault();
    this.setState({
      name: "",
      job: "",
      file: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      palette: 1
    });
  }

  render() {
    return (
      <div>
        <Header />
        <main className="main">
          <Card
            formData={this.state}
            palettesData={this.state.data}
            resetData={this.resetData}
          />
          <Form
            handleInput={this.handleInput}
            handlePalette={this.handlePalette}
            file={this.state.file}
            formData={this.state}
            palettesData={this.state.data}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
