import React from "react";
import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import HeaderLanding from "./HeaderLanding";
import Header from "./Header";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";
import LocalStorage from "../localStorage/localstorage";

class App extends React.Component {
  constructor(props) {
    super(props);
    const localStorageData = LocalStorage.get('user', {
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      file: "",
      palette: "1",
    })

    this.state = localStorageData;
    this.handleInput = this.handleInput.bind(this);
    this.handlePalette = this.handlePalette.bind(this);
    this.resetData = this.resetData.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }
  handlePalette(data) {
    this.setState({ palette: data });
  }
  handleInput(data) {
    this.setState({ [data.id]: data.inputValue });
  }

  isValidated() {

    const { name, job, file, phone, email, linkedin, github } = this.state;
    const emailRegex = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const phoneRegex = /[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}/;

    if (name && job && file && phoneRegex.test(phone) && emailRegex.test(email) && linkedin && github) {
      return true;

    } else {
      return false;
    }
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
      palette: "1"
    });
  }

  componentDidUpdate() {
    LocalStorage.set('user', this.state);
  }


  render() {
    console.log(this.state)
    return (
      <div>

        <Switch>
          <Route exact path="/" component={HeaderLanding} />
          <Route
            path="/card"
            render={() => (
              <>
                <Header />
                <main className="main">
                  <Card formData={this.state} palettesData={this.state.palette} resetData={this.resetData} />
                  <Form handleInput={this.handleInput} handlePalette={this.handlePalette} file={this.state.file} formData={this.state} palettesData={this.state.palette} isValidated={this.isValidated()} />
                </main>
              </>
            )}
          />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
