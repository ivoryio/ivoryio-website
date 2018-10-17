import React, { Component } from "react";
import "../../customStyles/fonts.css";
import "../../customStyles/businessStyle/businessForm.css";
import { Grid, Row, Col } from "react-bootstrap";

export default class BusinessForm extends Component {
  componentDidMount() {
    var newScript = document.createElement("script");
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
      <div>
        <div className={"fromContainer"}>
          <Grid>
            <Row>
              <Col sm={12} md={12}>
                <h3 className={"h3Style"}>TELL US ABOUT YOUR PROJECT</h3>
                <p className={"pStyle"}>
                  Give us some hints about your needs, the timeline in which you
                  need it <br />
                  from our team and we’ll get back to you very quick.
                </p>
              </Col>
            </Row>
              <Row className='d-flex justify-content-center'>
              <div className={'labels'} >
                  <p>My project is about</p>
                  <p>I'm</p>
                  <p>Contact me on my</p>
                  <p>Or on my phone</p>
                  <p>My budget is around</p>
                  </div>
                  <div
                    class="ml-form-embed"
                    data-account="1292624:y2g6q7x8c8"
                    data-form="1074244:g8g4x8"
                  />        
                </Row>
          </Grid>
        </div>
        </div>
    );
  }
}
