import React, { Component } from "react";
import { Row, Grid, Col} from "react-bootstrap";

import '../../customStyles/homeStyle/launchingSoonCSS.css'
import constants from '../../constants/homeConstants'

export default class LaunchingSoon extends Component {
  componentDidMount(){
    var newScript=document.createElement("script")
    var newContent = document.createTextNode(`(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){ 
          var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
          f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
          var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
          _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
          
          var ml_account = ml('accounts', '1292624', 'y2g6q7x8c8', 'load');`); 
          newScript.appendChild(newContent); 
      document.head.appendChild(newScript); 
  }
  render() {
    return (
      <div className={"containerLaunching"}>
        <Grid>
          <Row>
            <Col sm={12} md={12}>
              <h3 className={"h3Style"}>{constants.SIGN_UP}</h3>
            </Col>
          </Row>
          <div className="d-flex justify-content-center">
            <Row>
              <Col id='subs' sm={12} md={12}>
                <div
                  className="ml-form-embed"
                  data-account="1292624:y2g6q7x8c8"
                  data-form="1071240:d2n8x2"
                />
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}
