import React, { Component } from 'react';
import * as packageJson from './../../../package.json';

class Footer extends Component {
  
  render() {
    return (
      <div className="footer">Wszelkie prawa zastrzeżone v.{packageJson.version}</div>
    );
  }
}

export default Footer;
