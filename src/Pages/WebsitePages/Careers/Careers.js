import React, { Component } from "react";
import { Col, Row, Grid } from "react-bootstrap";
import Slider1Img from "../../../Assets/images/Slider_2.svg";
import { Button } from "react-bootstrap/lib";

class Careers extends Component {
  render() {
    return (
      <div>
        <div className="Career-Main">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <div className="Career-Page-Text">
                  <h1>Get Noticed. Get Hired.</h1>
                  <h4>
                    Join our team and help us reshape one of the India's leading
                    P2P company and make a platform that reach over 10 million
                    fans worldwide.
                  </h4>
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div className="Career-Slide-Image">
                  <img
                    // style={{ width: "80%" }}
                    alt="900x500"
                    src={Slider1Img}
                  />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className="Career-Main-Jobs">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <div>
                  <h3>Current Openings in Z2P</h3>
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h5>
                </div>
              </Col>
            </Row>
          </Grid>
          <br />
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <div className="Career-card">
                  <Row className="show-grid">
                    <Col xs={12} md={6}>
                      <h3>Sales Executive</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <p className="Description-link">See details..</p>
                    </Col>
                    <Col align="center" xs={12} md={3}>
                      <div className="margin-tb">
                        <h4>Starting at $5 per month</h4>
                      </div>
                    </Col>
                    <Col align="center" xs={12} md={3}>
                      <div className="margin-tb">
                        <Button bsStyle="primary">Apply Now</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={12} md={12}>
                <div className="Career-card">
                  <Row className="show-grid">
                    <Col xs={12} md={6}>
                      <h3>Node.js Backend Developer</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <p className="Description-link">See details..</p>
                    </Col>
                    <Col align="center" xs={12} md={3}>
                      <div className="margin-tb">
                        <h4>Starting at $5 per month</h4>
                      </div>
                    </Col>
                    <Col align="center" xs={12} md={3}>
                      <div className="margin-tb">
                        <Button bsStyle="primary">Apply Now</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Careers;
