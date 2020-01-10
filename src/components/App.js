import React from "react";
import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";
import LocalStorage from "../localStorage/localstorage";
import HeaderLanding from "./HeaderLanding";

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
      palette: 1,
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
    this.isValidated();
  }

  isValidated() {
    // const name = this.state.name;
    // const job = this.state.job;
    // const email = this.state.email;
    // const phone = this.state.phone;
    // const file = this.state.file;
    // const linkedin = this.state.linkedin;
    // const github = this.state.github;

    const { name, job, file, phone, email, linkedin, github } = this.state;

    if (name && job && file && phone && email && linkedin && github) {
      this.setState({
        isValidated: true
      })
    } else {
      this.setState({
        isValidated: false
      })
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
      palette: 1
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
                  <Form handleInput={this.handleInput} handlePalette={this.handlePalette} file={this.state.file} formData={this.state} palettesData={this.state.palette} isValidated={this.state.isValidated} />
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
