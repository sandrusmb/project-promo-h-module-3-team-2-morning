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
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      data: 1
    };
    this.handleInput = this.handleInput.bind(this);
    this.handlePalette = this.handlePalette.bind(this);
    this.resetData = this.resetData.bind(this);
  }
  handlePalette(data) {
    console.log(data);
    this.setState({ data });
  }

  handleInput(data) {
    // console.log(data.id);
    this.setState({ [data.id]: data.inputValue });
  }

  resetData(ev) {
    ev.preventDefault();
    this.setState({
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      palette: 1
    });
  }

  render() {
    console.log(this.state);
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
          // resetData={this.resetData}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
