import React, { Component } from "react";
import { Col, Row, Grid } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import GreyPlayStr from "../../../Assets/images/PR.png";

class Footer extends Component {
  render() {
    return (
      <div className="Footer-Main">
        <div className="Footer-Top">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={2}>
                <div>
                  <ul>
                    <li className="li-head">Company</li>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={2}>
                <div>
                  <ul>
                    <li className="li-head">Getting Start</li>
                    <li>
                      <a href="#">Product 1</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={2}>
                <div>
                  <ul>
                    <li className="li-head">Support</li>
                    <li>
                      <a href="#">FAQs 1</a>
                    </li>
                    <li>
                      <a href="#">FAQs 2</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div>
                  <ul>
                    <li className="li-head">Check our App</li>
                    <li>
                      <a gref="#">
                        {" "}
                        <img src={GreyPlayStr} />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div>
                  <ul className="Address-ul">
                    <li className="li-address">
                      <b>INDIA</b> <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li className="li-mail">contact@example.com</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="Footer-Bottom">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <div className="Footer-Bottom-Menu">
                  <div className="Left-Side">
                    <a href="">
                      <FontAwesomeIcon
                        style={{ marginRight: "20px" }}
                        size="1x"
                        icon={faFacebookF}
                        className="icon"
                      />
                    </a>
                    <a href="">
                      <FontAwesomeIcon
                        size="1x"
                        icon={faTwitter}
                        className="icon"
                      />
                    </a>
                  </div>
                  <div className="Right-Side">
                    <span>© 2019 RxForce, Inc.</span>
                    <div>
                      <a href="#">Terms & Conditions</a>
                      <a href="#">Privacy Policy</a>
                      <a href="#">Sitemap</a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Footer;
