import React, { Component } from "react";
import {
  Col,
  Row,
  Grid,
  Tab,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  TabContainer
} from "react-bootstrap";
import Slider1Img from "../../../Assets/images/Slider_2.svg";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Playstore from "../../../Assets/images/Steps/1.png";
import P2 from "../../../Assets/images/Steps/2.png";
import P3 from "../../../Assets/images/Steps/3.png";
import P4 from "../../../Assets/images/Steps/4.png";
import D1 from "../../../Assets/images/Documents/Aadhar.png";
import D2 from "../../../Assets/images/Documents/pan.png";
import D3 from "../../../Assets/images/Documents/empid-card.svg";
import D4 from "../../../Assets/images/Documents/statement.svg";
import D5 from "../../../Assets/images/Documents/id-card.svg";
import D6 from "../../../Assets/images/Documents/business_proof.svg";

class Borrower extends Component {
  render() {
    return (
      <div>
        <div className="Borrower-Main">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <div className="Borrower-Page-Text">
                  <h1>
                    You can always count on Z2P whenever you need funds in an
                    emergency!
                  </h1>
                  <br />
                  <ul>
                    <li>
                      <h4>Apply online for a loan in few minutes</h4>
                    </li>
                    <li>
                      <h4>
                        Get your loan credited in your bank account within a few
                        hours
                      </h4>
                    </li>
                    <li>
                      <h4>No physical verification and Zero Paper-work</h4>
                    </li>
                    <li>
                      <h4>Loans for students, salaried and small businesses</h4>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div className="Borrower-Slide-Image">
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

        <div className="Borrower-3">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <h2>Get a personal loan for your financial goals</h2>
                <h4 className="subtitle">
                  A personal loan through Z2P can help you take control of your
                  finance{" "}
                </h4>
              </Col>
            </Row>

            <Row align="left" className="btm">
              <Col xs={12} md={4}>
                <div className="Borrower-3-f">
                  <FontAwesomeIcon size="1x" icon={faCheck} className="icon" />
                  <h3>Credit Card Payment </h3>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="Borrower-3-f">
                  <FontAwesomeIcon size="1x" icon={faCheck} className="icon" />
                  <h3>Rental Deposit</h3>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="Borrower-3-f">
                  <FontAwesomeIcon size="1x" icon={faCheck} className="icon" />
                  <h3>Medical Emergency</h3>
                </div>
              </Col>
            </Row>

            <Row align="left" className="show-grid">
              <Col xs={12} md={4}>
                <div className="Borrower-3-f">
                  <FontAwesomeIcon size="1x" icon={faCheck} className="icon" />
                  <h3>Travel Loans </h3>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="Borrower-3-f">
                  <FontAwesomeIcon size="1x" icon={faCheck} className="icon" />
                  <h3>Family Function</h3>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="Borrower-3-f">
                  <FontAwesomeIcon size="1x" icon={faCheck} className="icon" />{" "}
                  <h3>Advance Salary</h3>
                </div>
              </Col>
            </Row>

            <Row align="left" className="show-grid">
              <Col xs={12} md={4}>
                <div className="Borrower-3-f">
                  <FontAwesomeIcon size="1x" icon={faCheck} className="icon" />
                  <h3>Home Renovation </h3>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="Borrower-3-f">
                  <FontAwesomeIcon size="1x" icon={faCheck} className="icon" />
                  <h3>Debt Consolidation </h3>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="Borrower-3-f">
                  <FontAwesomeIcon size="1x" icon={faCheck} className="icon" />
                  <h3>Electronic Equipments</h3>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div class="Borrower-Timeline ">
          <div class="container">
            <h2>How to apply for personal loan in Z2P ?</h2>
            <h4 className="subtitle">
              Applying for a loan through Z2P is very simple & fast. You can
              complete the entire process online.
            </h4>
            <h4 className="subtitle2">Please follow the steps:</h4>

            <div class="row">
              <div class="col-md-12">
                <div class="main-timeline">
                  <div class="timeline">
                    <div class="timeline-icon">
                      <i>
                        <img src={Playstore} />
                      </i>
                    </div>
                    <div class="timeline-content">
                      <h3 class="title">Download Z2P App</h3>
                      <p class="description">
                        Download the Z2P app from Google Play Store and then
                        register yourself as a borrower by filling all your
                        basic details in the signup form.
                      </p>
                    </div>
                  </div>

                  <div class="timeline">
                    <div class="timeline-icon">
                      <i>
                        <img src={P2} />
                      </i>
                    </div>
                    <div class="timeline-content">
                      <h3 class="title">Check Your Eligibility</h3>
                      <p style={{ textAlign: "right" }} class="description">
                        Fill your details and update the necessary documents.
                        Once your profile is completed just sit back and relax.
                        Z2P will review all your documents.
                      </p>
                    </div>
                  </div>

                  <div class="timeline">
                    <div class="timeline-icon">
                      <i>
                        <img src={P3} />
                      </i>
                    </div>
                    <div class="timeline-content">
                      <h3 class="title">Pay Documentation Fees</h3>
                      <p class="description">
                        Once approved, you will receive a loan-approval email
                        from Z2P following which you will have to pay a
                        “Documentation Fee” to proceed.
                      </p>
                    </div>
                  </div>

                  <div class="timeline">
                    <div class="timeline-icon">
                      <i>
                        <img src={P4} />
                      </i>
                    </div>
                    <div class="timeline-content">
                      <h3 class="title">Loan Disbursal</h3>
                      <p style={{ textAlign: "right" }} class="description">
                        After the “Documentation Fee” payment all the procedure
                        is completed and the loan will be credited to your given
                        bank account within few working hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Docs-Main">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <h2>Get a personal loan for your financial goals</h2>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={12} md={12}>
                <TabContainer id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <NavItem eventKey="first">Employee</NavItem>
                        <NavItem eventKey="second">Student</NavItem>
                        <NavItem eventKey="third">Business</NavItem>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <TabContent className="Docs-Right">
                        <TabPane eventKey="first">
                          <div>
                            <Col sm={6}>
                              <div className="media">
                                <img width="100px" src={D1} />
                                <div className="media-body">
                                  <h3>Aadhar Card</h3>
                                </div>
                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className="media">
                                <img width="100px" src={D2} />
                                <div className="media-body">
                                  <h3>Pan Card</h3>
                                </div>
                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className="media">
                                <img width="100px" src={D3} />
                                <div className="media-body">
                                  <h3>Employee ID Card</h3>
                                </div>
                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className="media">
                                <img width="100px" src={D4} />
                                <div className="media-body">
                                  <h3>Last 3 Months Bank Statement</h3>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                        <TabPane eventKey="second">
                          <div>
                            <Col sm={6}>
                              <div className="media">
                                <img width="100px" src={D1} />
                                <div className="media-body">
                                  <h3>Aadhar Card</h3>
                                </div>
                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className="media">
                                <img width="100px" src={D2} />
                                <div className="media-body">
                                  <h3>Pan Card</h3>
                                </div>
                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className="media">
                                <img width="100px" src={D5} />
                                <div className="media-body">
                                  <h3>Student ID Card</h3>
                                </div>
                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className="media">
                                <img width="100px" src={D4} />
                                <div className="media-body">
                                  <h3>Last 3 Months Bank Statement</h3>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                        <TabPane eventKey="third">
                          <div>
                            <Col sm={6}>
                              <div className="media">
                                <img width="100px" src={D1} />
                                <div className="media-body">
                                  <h3>Aadhar Card</h3>
                                </div>
                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className="media">
                                <img width="100px" src={D2} />
                                <div className="media-body">
                                  <h3>Pan Card</h3>
                                </div>
                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className="media">
                                <img width="100px" src={D6} />
                                <div className="media-body">
                                  <h3>Business Proof</h3>
                                </div>
                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className="media">
                                <img width="100px" src={D4} />
                                <div className="media-body">
                                  <h3>Last 3 Months Bank Statement</h3>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </TabContainer>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Borrower;
