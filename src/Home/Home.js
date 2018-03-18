import React, { Component } from 'react';
import logo from './react.svg';
import './Home.css';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes';

import About from '../About/About'
import Form from '../Form/Form'

import Header from '../App/components/Header/Header'
import Footer from '../App/components/Footer/Footer'

class Home extends Component {
  static async getInitialProps({ store }) {
    return store;
  }

  render() {
    console.log(this.props)
    return (
      <div className="Home">
        <Header intl={this.props.intl} />
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to After.js</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> or{' '}
          <code>src/About.js</code>and save to reload.
        </p>
        <Route path="/about" render={() => <About />} />
        <Route path="/form" render={() => <Form />} />
        <Footer />
      </div>
    );
  }
}

export default Home;
