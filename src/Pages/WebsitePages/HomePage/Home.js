import React, { Component } from "react";
import { Carousel, Col, Row, Grid } from "react-bootstrap";
import { Button } from "react-bootstrap/lib";
import Slider2Img from "../../../Assets/images/Slider_1.svg";
import Slider1Img from "../../../Assets/images/Slider_2.svg";
import Feat1 from "../../../Assets/images/Features/1.svg";
import Feat2 from "../../../Assets/images/Features/2.svg";
import Feat3 from "../../../Assets/images/Features/3.svg";
import Feat4 from "../../../Assets/images/Features/4.svg";
import Feat5 from "../../../Assets/images/Features/5.svg";
import Feat6 from "../../../Assets/images/Features/6.svg";
import TabImage from "../../../Assets/images/Tab.png";
import RXS from "../../../Assets/images/RXS1.jpg";
import PhoneImage from "../../../Assets/images/Phone.png";
import PlaystoreBtn from "../../../Assets/images/PlaystoreBtn.png";
import CountUp from "react-countup";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;
    const handleOnDragStart = e => e.preventDefault();

    return (
      <div>
        <div className="Main-Slider">
          <div className="Home-Slider">
            <div>
              <div className="Lender-Slide-Text">
                <img width="100%" src={RXS} />
              </div>
            </div>
          </div>
        </div>

        <div id="Main-Stats" className="Main-Stats">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={3}>
                <div className="Couter-Card" align="center">
                  <h1>
                    <CountUp end={24} />X<CountUp end={7} />
                  </h1>
                  <p>Fully Automated Diagnostic Laboratory</p>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="Couter-Card" align="center">
                  <h1>
                    <CountUp end={50000} />+
                  </h1>
                  <p>Specimens</p>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="Couter-Card" align="center">
                  <h1>
                    <CountUp end={200000} /> +
                  </h1>
                  <p>Chemical Chemistry Investigations Per Night</p>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="Couter-Card" align="center">
                  <h1>
                    <CountUp end={24} />X<CountUp end={7} />
                  </h1>
                  <p>Air Cargo Function</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className="Contianer Section-Padding Main-Features">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ?
                </h2>
              </Col>
            </Row>
          </Grid>
          <br />
          <br />
          <br />
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <div className="Feature-Grid">
                  <img src={Feat1} alt="Earn High Returns" />
                  <div>
                    <p className="p-title">Feature 1</p>
                    <p className="p-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="Feature-Grid">
                  <img src={Feat2} alt="Earn High Returns" />
                  <div>
                    <p className="p-title">Feature 2</p>
                    <p className="p-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <div className="Feature-Grid">
                  <img src={Feat3} alt="Earn High Returns" />
                  <div>
                    <p className="p-title">Feature 3</p>
                    <p className="p-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="Feature-Grid">
                  <img src={Feat4} alt="Earn High Returns" />
                  <div>
                    <p className="p-title">Feature 4</p>
                    <p className="p-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <div className="Feature-Grid">
                  <img src={Feat5} alt="Earn High Returns" />
                  <div>
                    <p className="p-title">Feature 5</p>
                    <p className="p-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="Feature-Grid">
                  <img src={Feat6} alt="Earn High Returns" />
                  <div>
                    <p className="p-title">Feature 6</p>
                    <p className="p-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className="Contianer Playstore-Main">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={7}>
                <div style={{ display: "inline-flex" }}>
                  <div>
                    <img className="TabImage" src={TabImage} alt="Our App" />
                  </div>
                  <div>
                    <img
                      className="PhoneImage"
                      src={PhoneImage}
                      alt="Our App"
                    />
                  </div>
                </div>
              </Col>
              <Col xs={12} md={5}>
                <div className="Playstore-Text">
                  <h1>It's new. It's hot. An unforgettable Experience.</h1>
                  <br />
                  <p>
                    Itatendam utentotatiat volupta expero ma volorum quiam vel
                    estioreped erae rendipsa nulluptur ressunt eatistis etur,
                    eatisti aut militat. Ate reicipid quidestia vent.
                  </p>
                  <br />
                  <h4>Download the app today</h4>
                  <br />
                  <img width="150px" src={PlaystoreBtn} alt="Our App" />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className="Contianer Section-Padding User-Reviews-Main">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={2}>
                <h4 className="TrustedBy">Trusted by:</h4>
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <AliceCarousel
                  autoPlay={true}
                  autoPlayInterval={3000}
                  dotsDisabled={true}
                  buttonsDisabled
                  mouseDragEnabled
                >
                  <div align="center" className="User-Review-Card">
                    <FontAwesomeIcon
                      size="5x"
                      icon={faQuoteLeft}
                      className="icon"
                    />
                    <h3 className="User-Review-Text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </h3>
                    <div align="center" className="User-Name-Profile">
                      <div className="Profile">
                        <h3>Borrower</h3>
                      </div>
                      <div className="UserName">
                        <h3>Tushar More</h3>
                      </div>
                    </div>
                  </div>

                  <div align="center" className="User-Review-Card">
                    <FontAwesomeIcon
                      size="5x"
                      icon={faQuoteLeft}
                      className="icon"
                    />
                    <h3 className="User-Review-Text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </h3>
                    <div align="center" className="User-Name-Profile">
                      <div className="Profile">
                        <h3>Borrower</h3>
                      </div>
                      <div className="UserName">
                        <h3>Prasil Das</h3>
                      </div>
                    </div>
                  </div>

                  <div align="center" className="User-Review-Card">
                    <FontAwesomeIcon
                      size="5x"
                      icon={faQuoteLeft}
                      className="icon"
                    />
                    <h3 className="User-Review-Text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </h3>
                    <div align="center" className="User-Name-Profile">
                      <div className="Profile">
                        <h3>Borrower</h3>
                      </div>
                      <div className="UserName">
                        <h3>Siddhesh Chati</h3>
                      </div>
                    </div>
                  </div>

                  <div align="center" className="User-Review-Card">
                    <FontAwesomeIcon
                      size="5x"
                      icon={faQuoteLeft}
                      className="icon"
                    />
                    <h3 className="User-Review-Text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </h3>
                    <div align="center" className="User-Name-Profile">
                      <div className="Profile">
                        <h3>Lender</h3>
                      </div>
                      <div className="UserName">
                        <h3>Arihant Agarwal</h3>
                      </div>
                    </div>
                  </div>

                  <div align="center" className="User-Review-Card">
                    <FontAwesomeIcon
                      size="5x"
                      icon={faQuoteLeft}
                      className="icon"
                    />
                    <h3 className="User-Review-Text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </h3>
                    <div align="center" className="User-Name-Profile">
                      <div className="Profile">
                        <h3>Lender</h3>
                      </div>
                      <div className="UserName">
                        <h3>Anurag Jain</h3>
                      </div>
                    </div>
                  </div>

                  <div align="center" className="User-Review-Card">
                    <FontAwesomeIcon
                      size="5x"
                      icon={faQuoteLeft}
                      className="icon"
                    />
                    <h3 className="User-Review-Text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </h3>
                    <div align="center" className="User-Name-Profile">
                      <div className="Profile">
                        <h3>Lender</h3>
                      </div>
                      <div className="UserName">
                        <h3>Abhishek Amrutia</h3>
                      </div>
                    </div>
                  </div>
                </AliceCarousel>
              </Col>
            </Row>
          </Grid>
        </div>

        <div align="center" className="Container RBI-Section-Main">
          <h2>Disclaimer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Button bsStyle="warning">Know More</Button>
        </div>
      </div>
    );
  }
}

export default Home;
