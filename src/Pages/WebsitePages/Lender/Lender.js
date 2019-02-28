import React, { Component } from "react";
import { Col, Row, Grid } from "react-bootstrap";
import Slider1Img from "../../../Assets/images/Slider_2.svg";
import P2PImage from "../../../Assets/images/main.jpg";
import CountUp from "react-countup";

class Lender extends Component {
  render() {
    return (
      <div>
        <div className="Lender-Main">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <div className="Lender-Page-Text">
                  <h1>Earn more than 40% return on investments with Z2P !</h1>
                  <br />
                  <ul>
                    <li>
                      <h4>
                        Lend money to pre-approved borrowers in the form of
                        small-short term loans
                      </h4>
                    </li>
                    <li>
                      <h4>
                        Diversify your investments to multiple borrowers to
                        reduce risk
                      </h4>
                    </li>
                    <li>
                      <h4>
                        Earn interest every month and generate passive income
                      </h4>
                    </li>
                    <li>
                      <h4>
                        Highest returns in the market with low default rate
                      </h4>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div className="Lender-Slide-Image">
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

        <div id="Lender-Main-Stats" className="Lender-Main-Stats">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={2}>
                <div className="Lender-Couter-Card" align="center">
                  <h1>
                    <CountUp end={521} />
                  </h1>
                  <p>Total Amount Lent</p>
                </div>
              </Col>
              <Col xs={12} md={2}>
                <div className="Lender-Couter-Card" align="center">
                  <h1>
                    <CountUp end={49983} />
                  </h1>
                  <p>Total Lenders</p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="Lender-Couter-Card" align="center">
                  <h1>
                    &#8377; <CountUp end={214} />
                  </h1>
                  <p>Average returns per month</p>
                </div>
              </Col>
              <Col xs={12} md={2}>
                <div className="Lender-Couter-Card" align="center">
                  <h1>
                    <CountUp end={8990} />
                  </h1>
                  <p>Loans Under Portfolio</p>
                </div>
              </Col>
              <Col xs={12} md={2}>
                <div className="Lender-Couter-Card" align="center">
                  <h1>
                    <CountUp end={98} />.<CountUp end={6} />%
                  </h1>
                  <p>Lender Protection Fund</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={2}>
              <img src={P2PImage} />
            </Col>
          </Row>
        </Grid>
        <div />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Lender;
